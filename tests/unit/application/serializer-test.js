/* Does not work, see https://github.com/ember-cli/ember-cli/issues/5778
moduleForModel('application', 'Unit | Serializer | application', {
  // Specify the other units that are required for this test.
  needs: ['serializer:application']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
*/

import { test } from 'ember-qunit';

test('empty!', function(assert) {
  assert.ok(true);
});
