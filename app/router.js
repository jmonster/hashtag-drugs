import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('onboarding');

  this.route('authenticated', { path: '/' }, function() {
    this.route('devices.new', { path: '/devices/new' });
    this.route('devices.show', { path: '/devices/:id' });
  });
});

export default Router;
