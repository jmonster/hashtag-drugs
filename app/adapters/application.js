import ENV from 'top-pot/config/environment';
import DS from 'ember-data';
import FirebaseAdapter from 'emberfire/adapters/firebase';

const { environment } = ENV;
let Adapter;

if (environment === 'test') {
  Adapter = DS.JSONAPIAdapter.extend({

  });
} else {
  Adapter = FirebaseAdapter.extend({

  });
}

export default Adapter;
