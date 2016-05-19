import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('lobbyist', params.lobbyist_id);
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(
      controller,
      'lobbyingActivity',
      this.store.query('lobbying-activity', { 'lobbyist_id': model.id })
    );
  },
  renderTemplate() {
    this.render('lobbyist.by-id', {
      into: 'application',
    });
  },
});
