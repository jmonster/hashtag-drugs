import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  include: ['brand', 'pictures', 'reviews']
});
