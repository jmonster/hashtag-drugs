import { hash } from 'rsvp';
import { run } from '@ember/runloop';
import { on } from '@ember/object/evented';
import { inject } from '@ember/service';
import { isEmpty } from '@ember/utils';
import { task } from 'ember-concurrency';
import RSVP from 'rsvp';
import Route from '@ember/routing/route'

export default Route.extend({
  theme: inject(),
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
    if (session.isAuthenticated) {
      const _cart = this.get('fetchCart').perform();
      const _chartItems = _cart.then((cart) => cart.get('cartItems'));

      return hash({
        cart: _cart,
        cartItems: _chartItems
      });
    }
  },

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider }).then(() => { this.transitionTo('/'); });
    },

    signOut() {
      this.get('session').close()
        .then(() => { this.transitionTo('/'); })
        .catch((/*err*/) => { window.location.assign('/'); });
    },

    transitionTo(route) {
      // transitionTo(route, id, event) vs transitionTo(route, event)
      const id = arguments.length > 2 ? arguments[1] : null;

      if (isEmpty(id)) {
        this.transitionTo(route);
      } else {
        this.transitionTo(route, id);
      }
    },

    hopTo(url) {
      // TODO make this work with Cordova
      window.location.assign(url);
    },

    // usage: this.send('toastMessage', message)
    // alt usage: {{action "toastMessage" message}}
    // expires after 6 seconds
    toastMessage(message) {
      this.get('theme').toastMessage(message);
    },

    // usage: this.send('addToCart', product, options)
    // alt usage: {{action "addToCart" product (hash quantity=1)}}
    // options will be the customizations added to the cart item, such as
    // quantity, color, size, etc.
    addToCart(product, options = {}) {
      this.get('session.currentUser.cart').then((cart) => {
        const cartItems = cart.get('cartItems');
        const quantity = options.quantity || 1;

        let cartItem = cartItems.findBy('product.id', product.get('id'));
        let pendingSave;

        if (cartItem) {
          cartItem.incrementProperty('quantity', quantity);
          pendingSave = cartItem.save();
        } else {
          cartItem = this.store.createRecord('cart-item', {
            product, quantity
          });

          cartItems.pushObject(cartItem);
          pendingSave = cartItem.save().then(() => cart.save());
        }

        pendingSave.then(() => {
          this.get('theme').toastMessage(`${quantity} item(s) added`, {
            path: 'cart',
            text: 'view cart'
          });
        }).catch((/*err*/) => {
          this.get('theme').toastMessage('error adding item');
        });
      });
    },

    removeFromCart(cartItem) {
      this.get('session.currentUser.cart').then((cart) => {
        cart.get('cartItems').removeObject(cartItem);
        cart.save().then(() => cartItem.destroyRecord());
      });
    }
  }
});
