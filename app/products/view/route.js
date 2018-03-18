import Route from '@ember/routing/route';

export default Route.extend({
  theme: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('product', params.id);
  },

  actions: {
    addToCart(record, options = {}) {
      this.store.createRecord('cart-item', {
        product: record,
        quantity: options.productQuantity
      });

      this.get('theme').toastMessage(`${options.productQuantity} item(s) added`);
    }
  }
});
