import { Factory, faker, belongsTo, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  reviews: hasMany('review'),
  pictures: hasMany('picture'),
  brand: belongsTo('brand'),
  name: faker.name.findName(),
  description: faker.lorem.paragraphs,
  price: faker.random.number({min: 100, max: 80000}),
});
