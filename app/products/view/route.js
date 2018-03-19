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
  }
});
