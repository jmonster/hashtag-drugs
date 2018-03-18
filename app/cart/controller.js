import Controller from '@ember/controller';

export default Controller.extend({
  cartItems: Ember.computed.map('model', function(item) {
    return {
      name: item.get('product.name'),
      quantity: item.get('quantity')
    };
  })
});
