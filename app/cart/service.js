import Service from '@ember/service';
import { inject } from '@ember/service';

export default Service.extend({
  store: inject(),

  addToCart(cart, product, options = {}) {
    const cartItems = cart.get('cartItems');
    const quantity = options.quantity || 1;

    let cartItem = cartItems.findBy('product.id', product.get('id'));
    let pendingSave;

    if (cartItem) {
      cartItem.incrementProperty('quantity', quantity);
      pendingSave = cartItem.save();
    } else {
      cartItem = this.get('store').createRecord('cart-item', {
        product, quantity
      });

      cartItems.pushObject(cartItem);
      pendingSave = cartItem.save().then(() => cart.save());
    }

    pendingSave.then(() => {

    }).catch((/*err*/) => {

    });
  },

  removeFromCart(cartItem) {
    cartItem.get('cart').then((cart) => {
      cart.get('cartItems').removeObject(cartItem);
      cart.save().then(() => cartItem.destroyRecord());
    });
  }
});
