import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  theme: service(),
  cartItemCount: computed('model.cartItems.@each.quantity', function() {
    if (this.get('model.cartItems.length')) {
      const quantities = this.get('model.cartItems').mapBy('quantity');
      return quantities.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
    }

    return 0;
  }),
});
