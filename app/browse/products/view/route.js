import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  theme: service(),

  model(params) {
    return this.store.findRecord('product', params.id);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('quantity', 1);
    }
  }
});
