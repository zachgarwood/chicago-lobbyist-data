import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  address1: attr(),
  address2: attr(),
  city: attr(),
  createdDate: attr('date'),
  email: attr(),
  employerName: attr(),
  firstName: attr(),
  lastName: attr(),
  middleInitial: attr(),
  phone: attr(),
  salutation: attr(),
  state: attr(),
  suffix: attr(),
  zip: attr(),
  //employer: belongsTo('employer'),
});
