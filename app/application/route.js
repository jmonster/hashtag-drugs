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

    toastMessage(message) {
      this.get('theme').toastMessage(message);
    }
  }
});
