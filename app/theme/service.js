import Service from '@ember/service';

export default Service.extend({
  // toast message
  toastMessageText: null,
  toastMessage(message, linkOptions = {}) {
    this.set('toastMessageText', message);

    if (linkOptions.path && linkOptions.text) {
      this.setProperties({
        toastLinkText: linkOptions.text,
        toastLinkPath:linkOptions.path,
      });
    } else {
      this.setProperties({
        toastLinkPath: '',
        toastLinkText: '',
      })
    }
  },
  clearToast() {
    this.set('toastMessageText', '');
  },

  // alerts
  alertDismissible: false,
  setupConnectivityAlert: Ember.on('init', function() {
    window.addEventListener('online', () => {
      this.clearAlert();
      this.toastMessage('re-connected');
    });
    window.addEventListener('offline', () => {
      this.alertMessage('Your computer seems to be offline. You may continue to browse, but will not be able to checkout.', {
        dismissible: true
      });
    });
  }),
  alertText: '',
  alertContext: 'info',
  alertMessage(message, options = {}) {
    this.setProperties({
      alertText: message,
      alertContext: options.context || 'info',
      alertDismissible: options.dismissible || false,
    });
  },
  clearAlert() {
    this.set('alertText', '');
  }
});
