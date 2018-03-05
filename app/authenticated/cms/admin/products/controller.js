import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  store: service(),

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
  })
});
