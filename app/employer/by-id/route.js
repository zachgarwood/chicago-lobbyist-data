import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('employer', params.employer_id);
  },
  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'lobbyists', this.store.query('lobbyist', { 'employer_id': model.get('id') }));
  },
  renderTemplate() {
    this.render('employer.by-id', {
      into: 'application',
    });
  },
});
