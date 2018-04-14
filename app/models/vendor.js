import DS from 'ember-data';

// !! IMPORTANT !!
// https://github.com/firebase/emberfire/blob/master/docs/guide/relationships.md#relationships
//
// Unless have a reason and understand the implications
// we suggest using inverse: null in your relationships
// and saving both sides manually
// due to the nature of the Real-time Database.

const inverse = null;

export default DS.Model.extend({
  products: DS.hasMany('product', { inverse }),
  blogPosts: DS.hasMany('blog-post', { inverse }),
  announcements: DS.hasMany('announcement', { inverse }),
  location: DS.belongsTo('location', { inverse }),
  name: DS.attr('string'),
  description: DS.attr('string'),
  instagramFeed: DS.attr('string'),

  editRoute: 'authenticated.cms.admin.vendors.edit',
  viewRoute: 'authenticated.cms.admin.vendors.edit'
});
