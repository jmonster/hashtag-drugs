import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  store: service(),

  newVendor: computed(function() {
    const vendor = this.store.createRecord('vendor');
    vendor.set('location', this.store.createRecord('location'));
    return vendor;
  }),

  vendors: filterBy('_vendors', 'isNew', false),
  _vendors: computed(function() {
    return this.store.findAll('vendor');
  }),

  products: filterBy('_products', 'isNew', false),
  _products: computed(function() {
    return this.store.findAll('product');
  }),

  actions: {
    saveVendor(vendor) {
      vendor.save();
      vendor.get('location.content').save();
    }
  }
});
