import Model from 'ember-data/model';
import attr from 'ember-data/attr'; 
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  action: attr(),
  actionSought: attr(),
  client: belongsTo('client', { async: true }),
  clientName: attr(),
  createdDate: attr('date'),
  department: attr(),
  lobbyist: belongsTo('lobbyist', { async: true }),
  lobbyistLastName: attr(),
  periodEnd: attr('date'),
  periodStart: attr('date'),
});
