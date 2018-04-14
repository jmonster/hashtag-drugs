import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      // cartItems: this.store.peekAll('cart-item')
      cartItems: this.modelFor('application').cartItems
    });
  }
});
