import { later } from '@ember/runloop';
import { inject as service } from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
  theme: service(),
  classNames: ['toast-message'],
  message: '',
  timeout: 6000,
  age: 0,
  didInsertElement() {
    later(() => {
      this.get('theme').toastMessage('');
    }, this.get('timeout'));
  }
});
