import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  totalPrice: Ember.computed('cartItemCount', function() {
    const totalPrice = this.get('cartItemCount') * 25; // TODO: use real price when ready
    return `$${totalPrice}.00`;
  }),
  cartItemCount: Ember.computed('model.cartItems.@each.quantity', function() {
    if (this.get('model.cartItems.length')) {
      const quantities = this.get('model.cartItems').mapBy('quantity');
      return quantities.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
    }

    return 0;
  }),
});
