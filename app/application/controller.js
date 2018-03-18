import Controller from '@ember/controller';

export default Controller.extend({
  theme: Ember.inject.service(),
  cartItemCount: Ember.computed('model.cartItems.@each.quantity', function() {
    if (this.get('model.cartItems.length')) {
      const quantities = this.get('model.cartItems').mapBy('quantity');
      return quantities.reduce((a, b) => a + b);
    }

    return 0;
  })
});
