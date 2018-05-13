import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
  classNames: ['product-card', 'pa2', 'dib'],

  imageSrc: computed(function() {
    const pictures = this.get('product.pictures');
    const img = pictures.get('firstObject');
    return img.get('url');
  })
});
