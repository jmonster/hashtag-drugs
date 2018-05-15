import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNames: ['list-item-product', 'shadow-outer-1', 'flex', 'mv1', 'items-center'],

  image: computed('product.pictures.@each.url', function() {
    return this.get('product.pictures').firstObject;
  })
});
