import { moduleForModel, test } from 'ember-qunit';

moduleForModel('lobbyist', 'Unit | Model | lobbyist', {
  // Specify the other units that are required for this test.
  needs: ['model:employer']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
