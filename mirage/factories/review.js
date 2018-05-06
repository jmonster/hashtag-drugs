import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  author: belongsTo('user'),
  product: belongsTo('product'),
  body: faker.lorem.paragraph(),
  rating: faker.random.number({min:1, max:5})
});
