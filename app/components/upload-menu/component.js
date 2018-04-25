import Component from '@ember/component';
import { inject } from '@ember/service';

export default Component.extend({
  storage: inject(),

  actions: {
    didSelectFile([file]) {
      return this.get('storage').upload('menu', file);
    }
  }
});
