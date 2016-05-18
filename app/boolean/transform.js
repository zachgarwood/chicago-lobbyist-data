import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    return serialized === 'Y';
  },

  serialize(deserialized) {
    return deserialized ? 'Y' : 'N';
  }
});
