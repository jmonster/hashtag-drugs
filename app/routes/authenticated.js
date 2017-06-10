import Ember from 'ember';

export default Ember.Route.extend({
  afterModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('onboarding');
    }
  }
});
