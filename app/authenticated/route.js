import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  theme: service(),
  afterModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('onboarding');
    }
  },

  actions: {
    saveRecord(record) {
      record.save().then(() => {
        this.get('theme').toastMessage('saved!');

        // redirect to edit page (if provided)
        // to allow subsequent changes to this asset
        const route = record.get('editRoute');
        if (route) {
          this.transitionTo(route, record.id);
        }
      });
    }
  }
});
