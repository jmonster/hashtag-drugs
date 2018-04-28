import { Factory, faker, belongsTo, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  name: faker.name.findName(),
  email: faker.internet.email(),
  isAnonymous: true,
  cart: belongsTo('cart'),
  orders: hasMany('order'),
  defaultBillingLocation: belongsTo('location'),
  defaultDeliveryLocation: belongsTo('location'),
  addressBook: hasMany('locations')
});
