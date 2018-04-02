import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  store: service(),

  vendor: oneWay('model.vendor'),

  products: filterBy('_products', 'isNew', false),
  _products: computed(function() {
    return this.store.findAll('product');
  }),

  actions: {
    productsChanged(selectedProducts) {
      this.get('vendor').set('products', selectedProducts);
    }
  }
});
