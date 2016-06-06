// Angular & Router ES6 Imports
import angular from 'angular';
import angularUIRouter from 'angular-ui-router';
import angularMaterial from 'angular-material';
import appComponents from './components/components.js';
import commonComponents from './common/components.js';
import appServices from './services/services.js';
import appConfiguration from './app.config';

// Single Style Entry Point
import '../node_modules/angular-material/angular-material.scss';

if (ENVIRONMENT === 'test') {
  console.log('ENV:', ENVIRONMENT);
  require('angular-mocks/angular-mocks');
}

const app = angular.module('app', ['ngMaterial','ui.router']);

// Components Entrypoint
appComponents(app);

// Common Components Entrypoint
commonComponents(app);

// App Services Entrypoint
appServices(app);

// Router Configuration
// Components must be declared first since
// Routes reference controllers that will be bound to route templates.
// appConfiguration(app);
