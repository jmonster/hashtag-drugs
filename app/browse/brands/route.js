import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      brands: this.store.findAll('brand')
    });
  }
});
