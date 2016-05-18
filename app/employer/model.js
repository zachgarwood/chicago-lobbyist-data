import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  address1: attr(),
  phone: attr(),
  state: attr(),
  zip: attr(),
  address2: attr(),
  city: attr(),
  createdDate: attr('date'),
  active: attr('boolean'),
});
