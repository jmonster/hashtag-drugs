import { isEmpty } from '@ember/utils';
import Route from '@ember/routing/route'

export default Route.extend({
  theme: Ember.inject.service(),

  removeInitialLoading: Ember.on('activate', function() {
    if (document) {
      document.getElementById('initial-loading').remove();
    }
  }),

  beforeModel() {
    const fetchSession = this.get('session').fetch().catch(function() {});

    // initial loading
    Ember.run(function() {
      const loadingProgress = document.getElementById('initial-loading').children[0].children[1];
      loadingProgress.value = 70;

      fetchSession.then(function() {
        loadingProgress.value = 100;
      });
    });

    return fetchSession;

  },

  model() {
    return Ember.RSVP.hash({
      user: this.store.peekAll('user').get('firstObject'),
      cartItems: this.store.peekAll('cart-item')
    });
  },

  actions: {
    signIn(provider) {
      this.get('session').open('firebase', { provider }).then(() => { this.transitionTo('/'); });
    },

    signOut() {
      this.get('session').close().then(() => { this.refresh(); });
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
      this.store.createRecord('cart-item', {
        product: product,
        quantity: parseInt(options.quantity, 10)
      });

      this.get('theme').toastMessage(`${options.quantity} item(s) added`);
    }
  }
});
