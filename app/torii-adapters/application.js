import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import Ember from 'ember';

const { inject: { service }} = Ember;

export default ToriiFirebaseAdapter.extend({
  store: service(),

  open(authorization) {
    const store = this.get('store');

    return store.find('user', authorization.uid)
      .catch(() => {
        return store.createRecord('user', {
          name: authorization.displayName,
          email: authorization.email
        }).save();
      })
      .then((currentUser) => {
        return { currentUser };
      });
  }
});
