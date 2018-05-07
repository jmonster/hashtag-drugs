import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  store: inject(),

  queryParams: ['brand', 'dispensary'],
  brand: null,  // id
  vendor: null, // id

  products: computed('brand', 'vendor', function() {
    const brand = this.get('brand');
    const dispensary = this.get('dispensary');

    if (brand) {
      return this.store.query('product', {orderBy: 'brand', equalTo: brand});
    }

    if (dispensary) {
      return this.store.query('product', {orderBy: 'dispensary', equalTo: vendor});
    }

    return this.get('model').products;
  })
});
