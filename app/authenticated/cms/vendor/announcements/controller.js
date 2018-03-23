import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  store: service(),

  vendor: oneWay('model.vendor'),
  newAnnouncement: computed(function() {
    return this.get('store').createRecord('announcement');
  }),

  announcements: filterBy('_announcements', 'isNew', false),
  _announcements: oneWay('model.announcements'),

  actions: {
    saveAnnouncement() {
      const vendor = this.get('vendor');
      const newAnnouncement = this.get('newAnnouncement');

      // add to vendor's announcements collection
      vendor.get('announcements').addObject(newAnnouncement);

      // save the announcement
      newAnnouncement.save().then(() => {
        // then save the vendor
        // to persist the `announcements` collection
        vendor.save();
      });
    },

    deleteAnnouncement(announcement) {
      const vendor = this.get('vendor');
      vendor.get('announcements').removeObject(announcement);

      // destroy the announcement
      return announcement.destroyRecord().then(() => {
        // then save the vendor
        // to persist the `announcements` collection
        return vendor.save();
      });
    }
  }
});
