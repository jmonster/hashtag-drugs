import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  actions: {
    saveRecord(record) {
      record.save().then(() => {
        // redirect to edit page (if provided)
        // to allow subsequent changes to this asset
        const route = record.get('editRoute');
        if (route) {
          this.transitionTo(route, record.id);
        }
      });
    },

    destroyRecord(record) {
      return record.destroyRecord();
    }
  }
});
