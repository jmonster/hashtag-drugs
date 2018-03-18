import Service from '@ember/service';

export default Service.extend({
  toastMessageText: null,
  toastMessage(message) {
    this.set('toastMessageText', message);
  }
});
