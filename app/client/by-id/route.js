import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('client', params.client_id); 
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(
      controller,
      'lobbyingActivity',
      this.store.query('lobbying-activity', { 'client_id': model.id })
    );
  },
  renderTemplate() {
    this.render('client.by-id', {
      into: 'application',
    });
  },
});
