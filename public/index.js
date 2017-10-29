import angular from 'angular';
import ngRoute from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import notification from 'angular-ui-notification';
import localyticsDirectives from 'angular-chosen-localytics';
import routes from '../routes/routes.js';
import UrlHelper from '../js/urlHelper.js'

//Controllers admin
import deporteCtrl from '../js/admin/controllers/deporteController.js'
import torneoCtrl from '../js/admin/controllers/torneoController.js'
import premioCtrl from '../js/admin/controllers/premioController.js'
import equipoCtrl from '../js/admin/controllers/equipoController.js'

//Controllers front
import eventoCtrl from '../js/front/controllers/eventoController.js'

//Services
import equipoService from '../js/services/equipoService.js'
import deporteService from '../js/services/deporteService.js'
import premioService from '../js/services/premioService.js'
import torneoService from '../js/services/torneoService.js'
import eventoService from '../js/services/eventoService.js'

window.BASE_URL = "http://localhost:3000";

export const app = angular.module('app', ['ui.router', 'ui-notification', 'localytics.directives', uiBootstrap]);

routes(app);
UrlHelper(app);
deporteCtrl(app);
deporteService(app);
torneoCtrl(app);
torneoService(app);
premioCtrl(app);
premioService(app);
equipoCtrl(app);
equipoService(app);
eventoCtrl(app);
eventoService(app);

app.config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(true);
});

