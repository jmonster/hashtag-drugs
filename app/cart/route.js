import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    const applicationModel = this.modelFor('application');
    const cart = applicationModel.cart;

    return hash({
      cart
    });
  }
});
