import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),

  device: DS.belongsTo('device', { inverse: null, async: true })
});
