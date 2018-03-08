import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { oneWay } from '@ember/object/computed';
import { filterBy } from '@ember/object/computed';

export default Controller.extend({
  store: service(),

  vendor: oneWay('model.vendor'),
  newPost: computed(function() {
    return this.get('store').createRecord('blog-post');
  }),

  blogPosts: filterBy('_blogPosts', 'isNew', false),
  _blogPosts: oneWay('model.blogPosts'),

  actions: {
    savePost(post) {
      const vendor = this.get('vendor');
      const newPost = this.get('newPost');

      // add to vendor's blogPosts collection
      vendor.get('blogPosts').addObject(newPost);

      // save the post
      newPost.save().then(() => {
        // then save the vendor
        // to persist the `blogPosts` collection
        vendor.save();
      });
    },

    deletePost(post) {
      const vendor = this.get('vendor');
      vendor.get('blogPosts').removeObject(post);

      // destroy the post
      return post.destroyRecord().then(() => {
        // then save the vendor
        // to persist the `blogPosts` collection
        return vendor.save();
      });
    }
  }
});
