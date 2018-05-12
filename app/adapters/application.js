import DS from 'ember-data';
import FirebaseAdapter from 'emberfire/adapters/firebase';
import ENV from 'hashtagdrugs/config/environment';

const mirage = ENV['ember-cli-mirage'];
let Adapter;

if (mirage.enabled) {
  Adapter = DS.JSONAPIAdapter.extend({});
} else {
  Adapter = FirebaseAdapter.extend({});
}

export default Adapter;
