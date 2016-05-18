import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('employer', params.employer_id);
  },
  renderTemplate() {
    this.render('employer.by-id', {
      into: 'application',
    });
  },
});
