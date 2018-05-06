import { Factory, faker, belongsTo } from 'ember-cli-mirage';

export default Factory.extend({
  product: belongsTo('product'),
  title: faker.name.title(),
  url: faker.image.imageUrl(),
  path: faker.system.filePath(),
  alt: faker.lorem.sentence()
});
