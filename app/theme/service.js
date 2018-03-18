import Service from '@ember/service';

export default Service.extend({
  _toastMessage: null,
  toastMessage(message) {
    this.set('_toastMessage', message);
  }
});
