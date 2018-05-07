import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  // product: association(),
  // cart: association(),
  quantity: () => faker.random.number({min: 1, max: 5})
});
