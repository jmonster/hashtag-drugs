import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      brands: this.store.findAll('brand'),
      vendors: this.store.findAll('vendor'),
      products: this.store.findAll('product')
    });
  }
});
