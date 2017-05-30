import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      this.get('session').open('firebase', { provider });
    },
    signOut: function() {
      this.get('session').close();
    },
    updateSchedule: function(device) {

    }
  }
});
