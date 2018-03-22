import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('onboarding'); // logged out users

  this.route('authenticated', { path: '/' }, function() {
    this.route('cms', function() {
      // dispenary-managed things
      this.route('vendor', { path: '/vendor/:id' }, function() { // dispensaries
        this.route('locations');                                 // email, phone, address, hours
        this.route('styles');                                    // logo, colors
        this.route('inventory');                                 // product catalog, prices, quantity in-stock
        this.route('blog')
        this.route('announcements')
      });

      // top-pot managed things
      this.route('admin', function() {
        this.route('vendors');  // dispensaries
        this.route('brands');   // product manufacturers
        this.route('products'); // global product catalog
      });
    });
  });

  this.route('cart');

  this.route('browse', function() {
    this.route('vendor');
    this.route('brand');
    this.route('products', { path: '/' }, function() {
      this.route('view', { path: '/view/:id' });
    });
  });
});

export default Router;
