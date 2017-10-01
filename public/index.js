import angular from 'angular';
import ngRoute from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import localyticsDirectives from 'angular-chosen-localytics';
import routes from '../routes/routes.js';

window.BASE_URL = "http://localhost:3000";

export const app = angular.module('app', ['ui.router', 'localytics.directives', uiBootstrap]);

routes(app);

app.controller('GlobalController', ['$rootScope', function ($rootScope) {
  // And your CONFIG vars in .constant will be passed to the HTML doc with this:
}]);

app.config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(true);
});

