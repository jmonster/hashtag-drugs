import Route from '@ember/routing/route';

export default Route.extend({
  theme: Ember.inject.service(),

  model(params) {
    return this.store.findRecord('product', params.id);
  },

  resetController(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('_productQuantity', 1);
    }
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
