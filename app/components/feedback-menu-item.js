import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    toggleDialog() {
      this.toggleProperty('showPositiveFeedback');
    }
  }
});
