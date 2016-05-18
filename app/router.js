import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('lobbyist', function() {
    this.route('by-id', { path: ':lobbyist_id' });
  });
  this.route('employer', function() {
    this.route('by-id', { path: ':employer_id' });
  });
});

export default Router;
