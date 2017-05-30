import DS from 'ember-data';

export default DS.Model.extend({
  temperatureOffset: DS.attr('number'),
  activeAt: DS.attr('number'),
  onDay: DS.attr('number'),
  value: DS.attr('string'),

  device: DS.belongsTo('device', { inverse: null })
});
