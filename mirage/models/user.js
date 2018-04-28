import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  orders: hasMany('order'),
  addressBook: hasMany('location'),

  cart: belongsTo('cart'),
  defaultBillingLocation: belongsTo('location'),
  defaultDeliveryLocation: belongsTo('location')
});
