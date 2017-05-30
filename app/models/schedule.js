import DS from 'ember-data';

export default DS.Model.extend({
  device: DS.belongsTo('device', { inverse: null }),
  events: DS.hasMany('event', { inverse: null, async: true })
});
