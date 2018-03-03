/* eslint-env node */
'use strict';

module.exports = {
  name: 'tp-theme',

  contentFor(type, config) {
    if (type === 'head') {
      this.ui.writeLine('[theme] adding Bootstrap CSS to <head> (v4.0.0-alpha.6)');
      return '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">';
    }
  }
};
