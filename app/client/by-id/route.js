import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('client', params.client_id); 
  },
  renderTemplate() {
    this.render('client.by-id', {
      into: 'application',
    });
  },
});
