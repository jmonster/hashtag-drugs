import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  // purchaser: association(),
  // cart: association(),
  createdAt: () => faker.date.past(),
  fulfilledAt: () => faker.date.past(),
  total: () => faker.random.number({min: 100, max: 8000})
});
