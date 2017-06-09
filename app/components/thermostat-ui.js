import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  classNames: ['thermostat-ui'],
  breathingTextClass: Ember.computed('targetTemperature', 'currentTemperature', function() {
    const { targetTemperature, currentTemperature } = this.getProperties('targetTemperature', 'currentTemperature');
    if (targetTemperature > currentTemperature) {
      return 'heat';
    } else if (targetTemperature < currentTemperature) {
      return 'cool'
    }
  })
});
