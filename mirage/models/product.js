import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  reviews: hasMany(),
  pictures: hasMany(),
  brand: belongsTo()
});
