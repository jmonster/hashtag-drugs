import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import Controller from '@ember/controller';
import RSVP from 'rsvp';

export default Controller.extend({
  theme: service(),
  store: service(),

  cartItemCount: computed('model.cartItems.@each.quantity', function() {
    if (this.get('model.cartItems.length')) {
      const quantities = this.get('model.cartItems').mapBy('quantity');
      return quantities.reduce((a, b) => parseInt(a, 10) + parseInt(b, 10));
    }

    return 0;
  }),

  thingsToFilterOn: computed(function() {
    return RSVP.all([
      this.get('store').findAll('product'),
      this.get('store').findAll('brand'),
      this.get('store').findAll('vendor'),
      // TODO cities
    ])
    .then((arrays) => [].concat(...arrays.map((arr) => arr.toArray())));
  })
});
