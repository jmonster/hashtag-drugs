import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['products'] /* eslint-disable-line ember/avoid-leaking-state-in-ember-objects */
});
