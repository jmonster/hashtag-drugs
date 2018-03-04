import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),

  newBrand: computed(function() {
    return this.store.createRecord('brand');
  }),

  newDispensary: computed(function() {
    const dispensary = this.store.createRecord('dispensary');
    dispensary.set('location', this.store.createRecord('location'));
    return dispensary;
  }),

  newProduct: computed(function() {
    return this.store.createRecord('product');
  }),

  newVendor: computed(function() {
    const vendor = this.store.createRecord('vendor');
    vendor.set('location', this.store.createRecord('location'));
    return vendor;
  }),

  brands: computed(function() {
    return this.store.findAll('brand');
  }),

  products: computed(function() {
    return this.store.findAll('product');
  }),

  dispensaries: computed(function() {
    const { longitude, latitude } = this.get('session.currentUser.location');
    const hasLocation = longitude && latitude;

    if (hasLocation) {
      // query dispensaries within X miles
    } else {
      // prompt for user's location
      // and persist the result
    }

    // TODO return filtered subset
    return this.store.findAll('dispensary');
  }),

  actions: {
    saveDispensary(dispensary) {
      dispensary.get('location.content').save();
      dispensary.save();
    },

    saveBrand(brand) {
      brand.save();
    },

    saveProduct(product) {
      product.save();
    },

    saveVendor(vendor) {
      vendor.save();
      vendor.get('location.content').save();
    }
  }
});
