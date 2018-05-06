import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  products: hasMany(),
  blogPosts: hasMany(),
  announcements: hasMany(),
  location: belongsTo()
});
