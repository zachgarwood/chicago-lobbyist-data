import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  address1: attr(),
  address2: attr(),
  city: attr(),
  createdDate: attr('date'),
  email: attr(),
  employer: belongsTo('employer', { async: true }),
  employerName: attr(),
  firstName: attr(),
  lastName: attr(),
  middleInitial: attr(),
  phone: attr(),
  salutation: attr(),
  state: attr(),
  suffix: attr(),
  zip: attr(),
});
