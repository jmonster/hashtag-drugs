import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  vendorCategories: computed('model.[]', function() {
    return []
  }),

  brandCategories: computed('model.[]', function() {
    const brands = this.get('model').mapBy('brand');
    debugger;
    return [];
  })
});
