import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  store: service(),

  brands: filterBy('_brands', 'isNew', false),
  _brands: computed(function() {
    return this.store.findAll('brand');
  }),

  actions: {
    saveBrand(name) {
      return this.store.createRecord('brand', { name }).save();
    }
  }
});
