import angular from 'angular';
import ngRoute from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import notification from 'angular-ui-notification';
import localyticsDirectives from 'angular-chosen-localytics';
import routes from '../routes/routes.js';
import deporteCtrl from '../js/admin/controllers/deporteController.js'
import deporteService from '../js/admin/services/deporteService.js'

window.BASE_URL = "http://localhost:3001";

export const app = angular.module('app', ['ui.router', 'ui-notification', 'localytics.directives', uiBootstrap]);

routes(app);

deporteCtrl(app);
deporteService(app);

app.config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(true);
});

