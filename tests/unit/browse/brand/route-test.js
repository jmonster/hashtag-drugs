import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | browse/brand', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:browse/brand');
    assert.ok(route);
  });
});
