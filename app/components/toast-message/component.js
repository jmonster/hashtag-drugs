import Component from '@ember/component';

export default Component.extend({
  theme: Ember.inject.service(),
  classNames: ['toast-message'],
  message: '',
  timeout: 6000,
  age: 0,
  setExpiration: Ember.on('didInsertElement', function() {
    Ember.run.later(() => {
      this.get('theme').toastMessage('');
    }, this.get('timeout'));
  })
});
