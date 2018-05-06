import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  purchaser: belongsTo('user'),
  tracking: belongsTo('delivery'),
  cart: belongsTo('cart'),
  createdAt: faker.date.past(),
  fulfilledAt: faker.date.past(),
  total: faker.random.number({min: 100, max: 8000})
});
