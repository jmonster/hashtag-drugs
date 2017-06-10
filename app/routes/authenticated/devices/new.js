import Ember from 'ember';
import RSVP from 'rsvp';

const { A } = Ember;

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      deviceModels: A([
        { title: 'ThermHAL 9000' }
      ])
    });
  }
});
