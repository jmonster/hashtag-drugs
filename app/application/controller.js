import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject } from '@ember/service';
import Controller from '@ember/controller';
import RSVP from 'rsvp';

export default Controller.extend({
  theme: inject(),
  store: inject(),

  cart: alias('model.cart'),
  cartItems: alias('cart.cartItems'),

  cartItemCount: computed('cartItems.@each.quantity', function() {
    if (this.get('model.cartItems.length')) {
      const quantities = this.get('model.cartItems').mapBy('quantity');
      return quantities.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
    }

    return 0;
  }),

  thingsToFilterOn: computed(function() {
    return RSVP.all([
      this.get('store').findAll('product'),
      this.get('store').findAll('brand'),
      this.get('store').findAll('vendor'),
      // TODO cities
    ])
    .then((arrays) => [].concat(...arrays.map((arr) => arr.toArray())));
  })
});
