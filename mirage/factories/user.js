import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  name: () => faker.name.findName(),
  email: () => faker.internet.email(),
  isAnonymous: true,
  // cart: association(),
  orders: () => [],
  defaultBillingLocation: association(),
  defaultDeliveryLocation: association(),
  addressBook: () => []
});
