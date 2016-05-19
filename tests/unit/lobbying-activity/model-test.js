import { moduleForModel, test } from 'ember-qunit';

moduleForModel('lobbying-activity', 'Unit | Model | lobbying activity', {
  // Specify the other units that are required for this test.
  needs: ['model:client', 'model:lobbyist']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
