import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject } from '@ember/service';

export default Controller.extend({
  store: inject(),
  cartService: inject('cart'),

  queryParams: ['brand', 'dispensary'],
  brand: null,  // name
  vendor: null, // name

  cart: alias('model.cart'),
  products: computed('brand', 'vendor', function() {
    const { products } = this.get('model');
    const brand = this.get('brand');
    const dispensary = this.get('dispensary');

    if (brand) {
      return products.filterBy('brand.name', brand);
    }

    if (dispensary) {
      return products.filterBy('dispensary.name', dispensary);
    }

    return products;
  }),

  actions: {
    addToCart() {
      this.get('cartService').addToCart(...arguments);
    }
  }
});
