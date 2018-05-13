import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['product', 'cart'] /* eslint-disable-line ember/avoid-leaking-state-in-ember-objects */
});
