import { typeOf } from '@ember/utils';
import $ from 'jquery';
import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize(serialized) {
    return (typeOf(serialized) == "array") ? serialized  : [];
  },

  serialize(deserialized) {
    const type = typeOf(deserialized);

    if (type == 'array') {
      return deserialized
    } else if (type == 'string') {
      return deserialized.split(',').map(function(item) {
        return $.trim(item);
      });
    } else {
      return [];
    }
  }
});
