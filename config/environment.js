/* eslint-env node */

module.exports = function(environmentArg) {
  // e.g. production:ios, development:web
  const [environment, platform] = environmentArg ? [environmentArg, 'web'].join(':').split(':') : ['development','web'];

  var ENV = {
    firebase: {
      apiKey: 'AIzaSyBj_Y-rlm9z-soF3UvlLqRNKNXKcVuJYIg',
      authDomain: 'thermhal9000-cb670.firebaseapp.com',
      databaseURL: 'https://thermhal9000-cb670.firebaseio.com',
      storageBucket: 'thermhal9000-cb670.appspot.com',
    },
    torii: {
      sessionServiceName: 'session'
    },
    i18n: {
      defaultLocale: 'en'
    },

    modulePrefix: 'thermhal-ui',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (platform !== 'web') {
    // cordova specific changes
    // http://embercordova.com/pages/workflow/project_setup

    ENV.locationType = 'hash';
    ENV.rootURL = '/';
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
