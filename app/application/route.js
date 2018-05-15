import { hash } from 'rsvp';
import { run } from '@ember/runloop';
import { on } from '@ember/object/evented';
import { inject } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { task } from 'ember-concurrency';
import RSVP from 'rsvp';
import Route from '@ember/routing/route'

export default Route.extend({
  session: inject(),
  store: inject(),

  removeInitialLoading: on('activate', function() {
    if (document) {
      const initalLoadingIndicator = document.getElementById('initial-loading-indicator');
      initalLoadingIndicator && initalLoadingIndicator.remove();
    }
  }),

  configureAnonymousUser() {
    const session = this.get('session');
    const store = this.get('store');

    if (!session.isAuthenticated) {
      return session.open('firebase', { provider: 'anonymous' }).then(({ currentUser }) => {
        currentUser.set('isAnonymous', true);

        const cart = store.createRecord('cart', { user: currentUser });
        currentUser.set('cart', cart);

        return RSVP.all([cart.save(), currentUser.save()])
          .then(() => { this.refresh(); });
      });
    }
  },

  fetchCart: task(function*() {
    const user = yield this.get('session.currentUser');
    let cart;

    try {
      cart = yield user.get('cart');
    } catch (err) {
      cart = this.store.createRecord('cart', { user });
      yield cart.save();

      user.set('cart', cart);
      user.save();
    }

    return cart;
  }),

  beforeModel() {
    const session = this.get('session');
    const fetchSession = session.fetch().catch(function() {});
    const configureAnonymousUser = this.get('configureAnonymousUser').bind(this);

    // initial loading
    const initalLoadingIndicator = document.getElementById('initial-loading-indicator');

    if (!initalLoadingIndicator) {
      return; // abort
    }

    const loadingProgress = initalLoadingIndicator.children[0].children[1];
    run(function() { loadingProgress.value = 70; });

    return fetchSession.then(() => {
      if (!session.get('isAuthenticated')) {
        return configureAnonymousUser();
      }
    }).then(() => {
      loadingProgress.value = 100;
    });
  },

  model() {
    const session = this.get('session');
    const brands = this.store.findAll('brand');
    const dispensaries = this.store.findAll('vendor');
    const products = this.store.findAll('product');

    if (session.get('isAuthenticated')) {
      const _cart = this.get('fetchCart').perform();
      const _chartItems = _cart.then((cart) => cart.get('cartItems'));

      return hash({
        products,
        brands,
        dispensaries,
        cart: _cart,
        cartItems: _chartItems
      });
    }

    return { brands, dispensaries, products };
  },

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider }).then(() => { this.transitionTo('/'); });
    },

    signOut() {
      this.get('session').close()
        .then(() => { this.transitionTo('/'); })
        .catch((/*err*/) => { window.location.assign('/'); });
    }
  }
});
