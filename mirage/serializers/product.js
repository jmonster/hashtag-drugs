import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['brand', 'pictures', 'reviews'] /* eslint-disable-line ember/avoid-leaking-state-in-ember-objects */
});
