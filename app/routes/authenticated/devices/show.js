import Ember from 'ember';
import RSVP from 'rsvp';

const { inject: { service } } = Ember;

export default Ember.Route.extend({
  session: service(),
  
  model({ id }) {
    return RSVP.hash({
      device: this.get('store').find('device', id)
    });
  }
});
