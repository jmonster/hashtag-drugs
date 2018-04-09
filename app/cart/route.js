import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return Ember.RSVP.hash({
      cartItems: this.store.peekAll('cart-item')
    });
  }
});
