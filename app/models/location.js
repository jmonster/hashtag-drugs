import DS from 'ember-data';

export default DS.Model.extend({
  street1: DS.attr("string"),
  street2: DS.attr("string"),
  zip: DS.attr("string"),
  city: DS.attr("string"),
  state: DS.attr("string"),
  longitude: DS.attr("string"),
  latitude: DS.attr("string"),
  phone: DS.attr("string"),
  email: DS.attr("string")
});
