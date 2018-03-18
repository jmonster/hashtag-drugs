import Controller from '@ember/controller';

export default Controller.extend({
  _productQuantity: 1,
  productQuantity: Ember.computed('_productQuantity', function() {
    return parseInt(this.get('_productQuantity'), 10);
  })
});
