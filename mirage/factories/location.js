import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  street1: () => faker.address.streetAddress(),
  street2: () => faker.address.secondaryAddress(),
  zip: () => faker.address.zipCode(),
  city: () => faker.address.city(),
  state: () => faker.address.state(),
  longitude: () => faker.address.longitude(),
  latitude: () => faker.address.latitude(),
  phone: () => faker.phone.phoneNumber(),
  email: () => faker.internet.email()
});
