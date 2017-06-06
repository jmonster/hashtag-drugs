import Ember from 'ember';

const { computed, computed: { oneWay, lte }, inject: { service } } = Ember;


export default Ember.Controller.extend({
  store: service(),

  deviceModels: oneWay('model.deviceModels'),
  disableModelSelect: lte('deviceModels.length', 1),
  selectedDeviceModel: computed('deviceModels.[]', function() {
    return this.get('deviceModels.length') === 1 ? this.get('deviceModels.firstObject') : null;
  }),

  actions: {
    selectDeviceModel(deviceModel) {
      this.set('selectedDeviceModel', deviceModel)
    },

    createDevice() {
      const { name, serial, selectedDeviceModel } = this.getProperties('name', 'serial', 'selectedDeviceModel');
      const user = this.get('session.currentUser');
      const record = this.get('store').createRecord('device', {
        name, serial, model: selectedDeviceModel.title
      });

      user.get('devices').addObject(record);

      return Ember.RSVP.Promise.all([
        user.save(),
        record.save()
      ]).then(() => {
        this.transitionToRoute('/');
      });
    }
  }
});
