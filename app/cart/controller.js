import { alias } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  totalPrice: Ember.computed('cartItemCount', function() {
    const cartItemCount = this.get('cartItemCount') * 25
    return `$${cartItemCount}.00`
  }),
  cartItemCount: Ember.computed('model.@each.quantity', function() {
    if (this.get('model.length')) {
      const quantities = this.get('model').mapBy('quantity');
      return quantities.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
    }

    return 0;
  }),
});
