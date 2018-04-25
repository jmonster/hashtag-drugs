import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  store: inject(),

  queryParams: ['brand', 'vendor'],
  brand: null,  // id
  vendor: null, // id

  products: computed('brand', 'vendor', function() {
    const brand = this.get('brand');
    const vendor = this.get('vendor');

    if (brand) {
      return this.store.query('product', {orderBy: 'brand', equalTo: brand});
    }

    if (vendor) {
      return this.store.query('product', {orderBy: 'vendor', equalTo: vendor});
    }

    return this.store.query('product', {});
  })
});
