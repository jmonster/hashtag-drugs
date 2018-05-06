import { Factory, belongsTo, faker } from 'ember-cli-mirage';

export default Factory.extend({
  product: belongsTo('product'),
  order: belongsTo('order'),
  quantity: faker.random.number({min: 1, max: 5})
});
