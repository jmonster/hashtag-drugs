import { map } from '@ember/object/computed';
import Controller from '@ember/controller';

export default Controller.extend({
  brandCategories: map('model.brands', function(brand) {
    return brand;
  })
});
