import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  brands: alias('model.brands'),
  dispensaries: alias('model.vendors'),
  specials: computed('model.products', function() {
    return this.get('model.products').slice(0,2);
  })
});
