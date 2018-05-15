import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name: () => faker.random.arrayElement([
    'Bloom Fields',
    'Gold Drop',
    'Nativ',
    'Jetty'
  ])
  // products: []
});
