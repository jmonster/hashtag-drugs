import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['x-input', 'box'],
  attributeBindings: ['style'],

  classWhenActive: computed('value', function() {
    const classes = ['label-emphasized', 'fadeInUp'];
    return this.get('value.length') ? classes.join(' ') : '';
  })
});
