import angular from 'angular';
import ngRoute from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import notification from 'angular-ui-notification';
import localyticsDirectives from 'angular-chosen-localytics';
import routes from '../routes/routes.js';
import deporteCtrl from '../js/admin/controllers/deporteController.js'
import deporteService from '../js/services/deporteService.js'
import torneoCtrl from '../js/admin/controllers/torneoController.js'
import torneoService from '../js/services/torneoService.js'
import premioCtrl from '../js/admin/controllers/premioController.js'
import premioService from '../js/services/premioService.js'

window.BASE_URL = "http://localhost:3000";

export const app = angular.module('app', ['ui.router', 'ui-notification', 'localytics.directives', uiBootstrap]);

routes(app);

deporteCtrl(app);
deporteService(app);
torneoCtrl(app);
torneoService(app);
premioCtrl(app);
premioService(app);

app.config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(true);
});

