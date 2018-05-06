import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  purchaser: belongsTo('user'),
  cart: belongsTo()
  // tracking: belongsTo('delivery')
});
