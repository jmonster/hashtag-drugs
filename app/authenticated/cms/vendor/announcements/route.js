import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model() {
    const { vendor } = this.modelFor('authenticated.cms.vendor');
    const announcements = vendor.get('announcements');
    // TODO limit to last 5 instead of fetching all

    return RSVP.hash({ vendor, announcements });
  }
});
