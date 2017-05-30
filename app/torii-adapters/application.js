import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import Ember from 'ember';

const { inject: { service }} = Ember;

export default ToriiFirebaseAdapter.extend({
  store: service(),

  open(authorization) {
    const id = authorization.uid;
    const name = authorization.displayName;
    const email = authorization.email;

    // _always_ creating a record even when it exists smells bad
    // but it works just fine with Firebase...
    // in fact, trying to do a find() first and it fails
    // will then cause the subsequent create to fail because
    // of some bug in Ember Data that things the ID is already taken...
    return this.get('store')
      .createRecord('user', { id, name, email })
      .save()
      .then((currentUser) => { return { currentUser }; });
  },

  close() {
    this._super(...arguments);
    this.get('store').unloadAll('user');
  }
});
