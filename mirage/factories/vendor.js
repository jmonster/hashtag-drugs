import { Factory, faker, belongsTo, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  products: hasMany('product'),
  blogPosts: hasMany('blogPost'),
  announcements: hasMany('anouncement'),
  location: belongsTo('location'),
  name: faker.name.findName(),
  description: faker.lorem.paragraphs(),
  instagramFeed: faker.internet.url()
});
