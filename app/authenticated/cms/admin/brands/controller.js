import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  store: service(),

  newBrand: computed(function() {
    return this.store.createRecord('brand');
  }),

  brands: filterBy('_brands', 'isNew', false),
  _brands: computed(function() {
    return this.store.findAll('brand');
  })
});
