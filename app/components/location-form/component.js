import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),

  didReceiveAttrs() {
    this._super(...arguments);

    const store = this.get('store');
    const record = this.get('record');

    if (!record) {
      throw new Error("You must provide a `record` to location-form.");
    }

    // ensure `location` attribute exists
    record.get('location').catch((e) => {
      record.set('location', this.get('store').createRecord('location'));
    });
  },

});
