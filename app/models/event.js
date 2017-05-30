import DS from 'ember-data';

export default DS.Model.extend({
  days: DS.attr('array'),
  temperature: DS.attr('number'),
  activateAt: DS.attr('number'),
  schedule: DS.belongsTo('schedule', { inverse: null, async: true })
});
