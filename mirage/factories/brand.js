import { Factory, faker, hasMany } from 'ember-cli-mirage';

export default Factory.extend({
  products: hasMany('product'),
  name: faker.name.findName()
});
