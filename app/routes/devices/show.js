import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model({ id }) {
    return RSVP.hash({
      device: this.get('store').find('device', id)
    });
  }
});
