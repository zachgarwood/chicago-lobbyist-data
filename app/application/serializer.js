import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({
  extractId(modelClass, resourceHash) {
    return resourceHash[`${modelClass.modelName}_id`];
  },
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, payload[0], id, requestType);
  },
  keyForRelationship(key) {
    return `${key}_id`;
  },
});
