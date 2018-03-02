import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('onboarding');
    }
  }
});
