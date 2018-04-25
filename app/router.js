import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
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

      // #drugs managed things
      this.route('admin', function() {
        // dispensaries
        this.route('vendors', function() {
          this.route('new');
          this.route('edit', { path: '/edit/:id' });
        });
        // product manufacturers
        this.route('brands', function() {
          this.route('new');
          this.route('edit', { path: '/edit/:id' });
        });
        // global product catalog
        this.route('products', function() {
          this.route('new');
          this.route('edit', { path: '/edit/:id' });
        });
      });
    });
  });

  this.route('cart');
  this.route('browse', function() {
    this.route('vendor');
    this.route('brand');
    this.route('products', { path: '/' }, function() {
      this.route('view', { path: '/view/:id' }, function() {
        this.route('benefits');
        this.route('reviews');
        this.route('photos');
      });
    });
  });
});

export default Router;
