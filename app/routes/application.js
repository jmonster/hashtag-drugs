import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model: function() {
    return RSVP.hash({
      schedule: this.store.findAll('schedule')
    });
  }
});
