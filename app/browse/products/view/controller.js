import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';
import { inject } from '@ember/service';

export default Controller.extend({
  cartService: inject('cart'),
  cart: alias('model.cart'),
  quantity: 1,

  product: alias('model.product'),
  images: alias('product.pictures'),

  actions: {
    updateQuantity(value) {
      this.set('quantity', value);
    },

    addToCart() {
      this.get('cartService').addToCart(...arguments);
    },

    copyLink() {
      const text = window.location.href;

      if (window.clipboardData && window.clipboardData.setData) {
          // IE specific code path to prevent textarea being shown while dialog is visible.
          return window.clipboardData.setData("Text", text);

      } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
          var textarea = document.createElement("textarea");
          textarea.textContent = text;
          textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
          document.body.appendChild(textarea);
          textarea.select();
          try {
              document.execCommand("copy");  // Security exception may be thrown by some browsers.
              // TODO show success message
          } catch (ex) {
              console.warn("Copy to clipboard failed.", ex);
              false;
          } finally {
              document.body.removeChild(textarea);
          }
      }
    }
  }
});
