import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import { inject } from '@ember/service';
import RSVP from 'rsvp';

export default ToriiFirebaseAdapter.extend({
  store: inject(),

  open(authorization) {
    const id = authorization.uid;
    const name = authorization.displayName;
    const email = authorization.email;
    const store = this.get('store');

    return store
      .find('user', id)
      .then((currentUser) => { return { currentUser }})
      .catch((/*err*/) => {
        const currentUser = store.createRecord('user', { id, name, email });
        const cart = store.createRecord('cart', { user: currentUser });
        currentUser.set('cart', cart);

        return RSVP.all([currentUser.save(), cart.save()])
          .then(() => { return { currentUser }; });
      });
  },

  close() {
    this.get('store').unloadAll('user');
    this.get('store').unloadAll('cart');
    this.get('store').unloadAll('cart-item');
    this.get('store').unloadAll('order');
    this.get('store').unloadAll('delivery');

    return this._super(...arguments);
  }
});
