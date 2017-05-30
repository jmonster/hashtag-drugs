import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  model: function() {
    return RSVP.hash({
      schedule: this.store.findAll('schedule')
    });
  },

  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider });
    },
    signOut: function() {
      this.get('session').close();
    }
  }
});
