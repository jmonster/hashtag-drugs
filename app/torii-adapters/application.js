import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import Ember from 'ember';
import RSVP from 'rsvp';

const { inject: { service }} = Ember;

export default ToriiFirebaseAdapter.extend({
  store: service(),

  open(authorization) {
    const id = authorization.uid;
    const name = authorization.displayName;
    const email = authorization.email;
    const store = this.get('store');

    return new RSVP.Promise(function(resolve) {
      store
        .find('user', id)
        .then((currentUser) => { resolve({ currentUser }); })
        .catch((/*err*/) => {
          // wait for Ember Data to sort out it's own issues
          Ember.run.later(function() {
            const currentUser = store.createRecord('user', { id, name, email });
            currentUser.save();
            resolve({ currentUser });
          });
        });
    });
  },

  close() {
    this.get('store').unloadAll('user');
    this.get('store').unloadAll('device');
    this.get('store').unloadAll('schedule');
    return this._super(...arguments);
  }
});
