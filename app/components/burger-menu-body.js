import Ember from 'ember';
import ENV from 'thermHAL/config/environment';

const { links: { amazonProductPage } } = ENV;

export default Ember.Component.extend({
  hrefForAmazon: amazonProductPage,
  classNames: ['burger-menu-body']
});
