import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  storage: service(),

  actions: {
    didSelectFile([file]) {
      return this.get('storage').upload('menu', file);
    }
  }
});
