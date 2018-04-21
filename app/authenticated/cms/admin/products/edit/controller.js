import Controller from '@ember/controller';
import RSVP from 'rsvp';
import { v4 } from 'ember-uuid';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

const { alias } = computed;

export default Controller.extend({
  store: service(),
  storage: service(),

  product: alias('model.product'),
  brands: computed(function() {
    return this.store.findAll('brand');
  }),

  actions: {
    selectBrand(newBrand) {
      this.set('product.brand', newBrand);
    },

    didSelectImages(images) {
      images = Array.from(images); // x-file-select doesn't provide an actual Array, so...

      const product = this.get('model.product');
      const transfers = images.map((file) => {
        // TODO verify image type & size is appropriate
        const path = `/products/${product.get('id')}/pictures`;
        const uuid = v4();

        return this
          .get('storage')
          .upload(uuid, file, path)
          .then((transfer) =>
            this
              .get('store')
              .createRecord('picture', {
                // title: "",
                url: transfer.downloadURL,
                path: transfer.a.fullPath,
                alt: "product photo",
                product: product
              })
          )
          .then((picture) =>
            picture
              .save()
              .then(() => product.get('pictures').pushObject(picture))
          )
      });

      // wait for all that asyncy stuff to finish
      RSVP.Promise.all(transfers)
        .then(() => {
          // TODO realize this is saving any/all changes and not necessairly just uploads
          product.save();
        })
    }
  }
});
