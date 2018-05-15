import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      dispensaries: this.modelFor('application').dispensaries
    });
  }
});
