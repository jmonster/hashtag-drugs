import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject } from '@ember/service';

export default Route.extend({
  session: inject(),

  model() {
    return hash({
      cart: this.get('session.currentUser.cart'),
      user: this.get('session.currentUser')
    });
  }
});
