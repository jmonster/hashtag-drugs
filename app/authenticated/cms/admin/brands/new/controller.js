import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Controller.extend({
  store: inject(),

  newBrand: computed(function() {
    return this.store.createRecord('brand');
  }),

  actions: {
    deleteBrand(brand) {
      // TODO *important* anything pointing at this record will now error...
      // perhaps we should just set a `deleted` flag?
      // or we can write a lambda-like hook to clean up the other records
      return brand.destroyRecord();
    }
  }
});
