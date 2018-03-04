import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return RSVP.hash({
      vendor: this.store.findRecord('vendor', params.id)
    });
  }
});
