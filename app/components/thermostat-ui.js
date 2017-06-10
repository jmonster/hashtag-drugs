import Ember from 'ember';

const { computed, computed: { alias } } = Ember;

export default Ember.Component.extend({
  tagName: '',
  classNames: ['thermostat-ui'],

  model: alias('device.model'),
  serial: alias('device.serial'),
  name: alias('device.name'),
  contactedAt: alias('device.contactedAt'),
  mode: alias('device.mode'),
  targetTemperature: alias('device.targetTemperature'),
  currentTemperature: alias('device.currentTemperature'),
  schedule: alias('device.schedule'),

  weatherIcon: computed('mode', function() {
    switch(this.get('device.mode')) {
      case 'heat':
        return 'whatshot';
      case 'cool':
        return 'ac-unit';
      case 'fan':
        return 'toys';
    }
  }),

  persistRecord() {
    this.get('device').save();
  },

  onTargetTemperatureChange: Ember.observer('targetTemperature', function() {
    Ember.run.debounce(this, this.persistRecord, 300);
  }),
});
