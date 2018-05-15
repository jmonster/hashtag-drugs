import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  classNames: ['product-card', 'pa2', 'dib'],
  cartService: inject('cart'),

  imageSrc: computed(function() {
    const pictures = this.get('product.pictures');
    const img = pictures.get('firstObject');
    return img.get('url');
  }),

  actions: {
    addToCart(cart, product) {
      this.get('cartService').addToCart(cart, product);
    }
  }
});
