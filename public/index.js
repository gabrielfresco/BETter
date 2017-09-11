import angular from 'angular';
import ngRoute from 'angular-ui-router';
import localyticsDirectives from 'angular-chosen-localytics';
import routes from '../routes/routes.js';

window.BASE_URL = "http://localhost:3000";

export const app = angular.module('app', ['ui.router', 'localytics.directives']);

app.config(function ($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');
    $locationProvider.html5Mode(true);
  });
  
