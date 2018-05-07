import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  reviews: [],
  pictures: [],
  // brand: association(),
  name: () => faker.name.findName(),
  description: () => faker.lorem.paragraphs(),
  price: () => faker.random.number({min: 100, max: 80000})
});
