import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['products', 'blogPosts', 'announcements', 'location'] /* eslint-disable-line ember/avoid-leaking-state-in-ember-objects */
});
