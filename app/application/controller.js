import { computed } from '@ember/object';
import { inject } from '@ember/service';
import Controller from '@ember/controller';
import RSVP from 'rsvp';

export default Controller.extend({
  store: inject(),

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
