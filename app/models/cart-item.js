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
  product: DS.belongsTo('product', { inverse }),
  order: DS.belongsTo('order', { inverse }), // set once an order is confirmed
  quantity: DS.attr('number')
});
