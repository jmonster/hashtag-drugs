import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  products: () => [],
  blogPosts: () => [],
  announcements: () => [],
  location: association(),
  name: () => faker.name.findName(),
  description: () => faker.lorem.paragraphs(),
  instagramFeed: () => faker.internet.url(),

  afterCreate(vendor, server) {
    const announcements = server.createList('announcement', 1);
    vendor.update({ announcements })
  }
});
