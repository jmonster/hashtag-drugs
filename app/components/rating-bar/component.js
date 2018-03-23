import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
  classNames: ['rating-bar', 'd-inline'],
  progress: 0,
  firstStarIcon: computed('progress', function() {
    const progress = this.get('progress');

    if (progress >= 20) {
      return 'star';
    } else if (progress >= 10) {
      return 'star-half-o';
    }

    return 'star-o';
  }),
  secondStarIcon: computed('progress', function() {
    const progress = this.get('progress');

    if (progress >= 40) {
      return 'star';
    } else if (progress >= 30) {
      return 'star-half-o';
    }

    return 'star-o';
  }),
  thirdStarIcon: computed('progress', function() {
    const progress = this.get('progress');

    if (progress >= 60) {
      return 'star';
    } else if (progress >= 50) {
      return 'star-half-o';
    }

    return 'star-o';
  }),
  fourthStarIcon: computed('progress', function() {
    const progress = this.get('progress');

    if (progress >= 80) {
      return 'star';
    } else if (progress >= 70) {
      return 'star-half-o';
    }

    return 'star-o';
  }),
  fifthStarIcon: computed('progress', function() {
    const progress = this.get('progress');

    if (progress >= 100) {
      return 'star';
    } else if (progress >= 90) {
      return 'star-half-o';
    }

    return 'star-o';
  }),
});
