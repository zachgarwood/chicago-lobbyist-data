import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  active: attr('boolean'),
  address1: attr(),
  address2: attr(),
  city: attr(),
  createdDate: attr('date'),
  name: attr(),
  state: attr(),
  zip: attr(),
});
