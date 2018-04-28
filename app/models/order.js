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
  purchaser: DS.belongsTo('user', { inverse }),
  tracking: DS.belongsTo('delivery', { inverse }),
  cart: DS.belongsTo('cart'),
  createdAt: DS.attr('date'),
  fulfilledAt: DS.attr('date'),
  total: DS.attr('number') // in cents
});
