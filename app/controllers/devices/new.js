import Ember from 'ember';

const { computed, computed: { oneWay, lte } } = Ember;


export default Ember.Controller.extend({
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
      
    }
  }
});
