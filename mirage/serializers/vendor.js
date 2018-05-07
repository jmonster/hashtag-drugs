import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['products', 'blogPosts', 'announcements', 'location']
});
