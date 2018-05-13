import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['user', 'cartItems'] /* eslint-disable-line ember/avoid-leaking-state-in-ember-objects */
});
