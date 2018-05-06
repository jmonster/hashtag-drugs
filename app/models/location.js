import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  street1: DS.attr("string"),
  street2: DS.attr("string"),
  zip: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  longitude: DS.attr("string"),
  latitude: DS.attr("string"),
  phone: DS.attr("string"),
  email: DS.attr("string"),

  asString: computed('street1', 'city', 'state', function() {
    const street = this.get('street1') || '';
    const city = this.get('city1') || '';
    const state = this.get('state1') || '';
    
    return [street, city, state].join(' ');
  })
});
