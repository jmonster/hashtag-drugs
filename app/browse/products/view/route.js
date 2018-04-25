import Route from '@ember/routing/route';
import RSVP from 'rsvp';

import { inject } from '@ember/service';

export default Route.extend({
  theme: inject(),

  model(params) {
    return RSVP.hash({
      product: this.store.findRecord('product', params.id)
    });
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('quantity', 1);
    }
  }
});
