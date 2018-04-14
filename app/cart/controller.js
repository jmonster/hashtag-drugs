import { computed } from '@ember/object';
import { alias, mapBy } from '@ember/object/computed';

import Controller from '@ember/controller';
import RSVP from 'rsvp';

export default Controller.extend({
  cartItems: alias('model.cartItems'),
  products: mapBy('cartItems', 'product'),

  totalQuantity: computed('cartItems.@each.quantity', function() {
    return this.get('cartItems').reduce(function(result, item) {
      const itemQuantity = item.get('quantity');
      return result + itemQuantity;
    }, 0);
  }),

  actions: {
    setQuantity(cartItem, quantity) {
      cartItem.set('quantity', quantity);
      return cartItem.save();
    }
  }
});
