import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('lobbyist', params.lobbyist_id);
  },
  renderTemplate() {
    this.render('lobbyist.by-id', {
      into: 'application',
    });
  },
});
