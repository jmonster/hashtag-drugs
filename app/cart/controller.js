import { computed } from '@ember/object';
import { alias, lt, mapBy } from '@ember/object/computed';
import { task } from 'ember-concurrency';
import { inject } from '@ember/service';

import Controller from '@ember/controller';
import RSVP from 'rsvp';

export default Controller.extend({
  cartService: inject('cart'),

  cart: alias('model.cart'),
  cartItems: alias('cart.cartItems'),
  hasEmptyCart: lt('cartItems.length', 1),
  products: mapBy('cartItems', 'product'),

  totalQuantity: computed('cartItems.@each.quantity', function() {
    const cartItems = this.get('cartItems');
    return !cartItems ? 0 : cartItems.reduce(function(result, item) {
      const itemQuantity = item.get('quantity');
      return result + itemQuantity;
    }, 0);
  }),

  totalCost: computed('cartItems.@each.quantity', 'products.@each.price', function() {
    return this.get('calculateTotalCost').perform();
  }),

  calculateTotalCost: task(function*() {
    const productTotals = yield this.get('calculateProductTotals').perform();
    return productTotals.reduce((acc, val) => acc + val, 0);
  }),

  calculateProductTotals: task(function*() {
    const promises = yield this.get('cartItems')
      .map((cartItem) => {
        const quantity = cartItem.get('quantity');
        return cartItem.get('product').then(function(product) {
          return  quantity * product.get('price');
        });
      });

    return RSVP.all(promises);
  }),

  actions: {
    setQuantity(cartItem, quantity) {
      if (quantity === 0) {
        const confirmed = confirm("Do you want to remove this item from your cart?");
        if (confirmed) { this.get('cartService').removeFromCart(cartItem); }
        else {
          // for some reason this isn't triggering the UI to update
          // but I confirmed via Ember extension that the data store has the new value
          cartItem.set('quantity', 1);
        }
      } else {
        cartItem.set('quantity', quantity);
        return cartItem.save();
      }
    }
  }
});
