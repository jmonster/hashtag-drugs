import Route from '@ember/routing/route';

export default Route.extend({
  theme: Ember.inject.service(),
  afterModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('onboarding');
    }
  },

  actions: {
    saveRecord(record) {
      record.save().then(() => {
        this.get('theme').toastMessage('saved!');
      });
    }
  }
});
