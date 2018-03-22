import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  brandCategories: computed.map('model.brands', function(brand) {
    return brand;
  })
});
