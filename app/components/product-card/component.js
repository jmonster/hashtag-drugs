import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
  classNames: ['product-card', 'pa2', 'dib'],
  cartService: inject('cart'),

  imageSrc: computed(function() {
    const pictures = this.get('product.pictures');
    const imgSrc = pictures.get('firstObject.url');
    return imgSrc;
  }),

  actions: {
    addToCart(cart, product) {
      this.get('cartService').addToCart(cart, product);
    }
  }
});
