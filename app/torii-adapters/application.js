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

    // _always_ creating a record even when it exists smells bad
    // but it works just fine with Firebase...
    // in fact, trying to do a find() first and it fails
    // will then cause the subsequent create to fail because
    // of some bug in Ember Data that things the ID is already taken...
    // return this.get('store')
    //   .createRecord('user', { id, name, email })
    //   .save()
    //   .then((currentUser) => { return { currentUser }; });

    return new RSVP.Promise(function(resolve) {
      store
        .find('user', id)
        .then((currentUser) => { resolve({ currentUser }); })
        .catch(() => {
          // give Ember Data a chance to work out it's own issues
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
