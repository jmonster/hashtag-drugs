import DS from 'ember-data';

// !! IMPORTANT !!
// https://github.com/firebase/emberfire/blob/master/docs/guide/relationships.md#relationships
//
// Unless have a reason and understand the implications
// we suggest using inverse: null in your relationships
// and saving both sides manually
// due to the nature of the Real-time Database.

const inverse = null;

export default DS.Model.extend({
  author: DS.belongsTo('user', { inverse }),
  product: DS.belongsTo('product', { inverse }),
  body: DS.attr('string'),
  rating: DS.attr('number') // 1 through 5
});
