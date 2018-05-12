import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import { inject } from '@ember/service';
import { task } from 'ember-concurrency';
import RSVP from 'rsvp';
export default Controller.extend({
  session: inject(),

  brands: alias('model.brands'),
  dispensaries: alias('model.vendors'),
  specials: computed('model.products', function() {
    return this.get('model.products').slice(0,2);
  }),

  // TODO optimize this to only fetch the last X products (?)
  // or find the X most frequently purchased (?)
  // and maybe avoid so many async calls
  filterPreviouslyPurchasedProducts: task(function*() {
    const orders = yield this.get('session.currentUser.orders');
    const carts = yield RSVP.all(orders.map((order) => order.get('cart')));
    const itemSets = yield RSVP.all(carts.map(((cart) => cart.get('cartItems'))));
    const items = itemSets.reduce((acc, cur) => acc.push(cur));
    const products = yield RSVP.all(items.map((item) => item.get('product')));

    return products;
  }),

  previouslyPurchasedProducts: computed('session.currentUser.orders', function() {
    return this.get('filterPreviouslyPurchasedProducts').perform();
  })
});
