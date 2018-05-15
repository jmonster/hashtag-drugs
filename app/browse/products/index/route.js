import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    const { cart, products } = this.modelFor('application');
    return hash({ cart, products });
  }
});
