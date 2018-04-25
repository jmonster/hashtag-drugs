import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  store: inject(),

  newProduct: computed(function() {
    return this.store.createRecord('product');
  }),

  brands: filterBy('_brands', 'isNew', false),
  _brands: computed(function() {
    return this.store.findAll('brand');
  }),

  products: filterBy('_products', 'isNew', false), // persisted records only
  _products: computed(function() {
    return this.store.findAll('product');
  }),

  actions: {
    deleteProduct(product) {
      // TODO *important* anything pointing at this record will now error...
      // perhaps we should just set a `deleted` flag?
      // or we can write a lambda-like hook to clean up the other records
      return product.destroyRecord();
    }
  }
});
