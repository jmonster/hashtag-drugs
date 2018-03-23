import Controller from '@ember/controller';

export default Controller.extend({
  // cartItems: Ember.computed.map('model', function(item) {
  //   return {
  //     id:
  //     name: item.get('product.name'),
  //     quantity: item.get('quantity')
  //   };
  // })
  cartItems: Ember.computed.alias('model')
});
