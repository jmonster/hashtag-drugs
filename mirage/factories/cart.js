import { Factory, belongsTo, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  user: belongsTo('user'),
  cartItems: hasMany('cartItem')
});
