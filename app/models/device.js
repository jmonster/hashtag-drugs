import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.attr('string'),
  serial: DS.attr('string'),
  name: DS.attr('string'),
  contactedAt: DS.attr('number'),

  mode: DS.attr('string'),
  targetTemperature: DS.attr('number'),
  currentTemperature: DS.attr('number'),

  schedule: DS.belongsTo('schedule', { inverse: null, async: true })
});
