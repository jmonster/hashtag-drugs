import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  quantity: 1,
  
  product: alias('model.product'),

  actions: {
    updateQuantity(value) {
      this.set('quantity', value);
    }
  }
});
