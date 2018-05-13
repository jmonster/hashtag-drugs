import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['author', 'product'] /* eslint-disable-line ember/avoid-leaking-state-in-ember-objects */
});
