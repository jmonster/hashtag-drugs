import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['user', 'cart', 'orders'] /* eslint-disable-line ember/avoid-leaking-state-in-ember-objects */
});
