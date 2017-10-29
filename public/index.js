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
<<<<<<< HEAD
import eventoCtrlAdmin from '../js/admin/controllers/eventoControllerAdmin.js'
=======

//Controllers front
import eventoCtrl from '../js/front/controllers/eventoController.js'
import apuestaCtrl from '../js/front/controllers/apuestaController.js'

//Services
>>>>>>> 7e7ba1119829b4a7aa9f3ecc2de2c74eff80cc54
import equipoService from '../js/services/equipoService.js'
import deporteService from '../js/services/deporteService.js'
import premioService from '../js/services/premioService.js'
import torneoService from '../js/services/torneoService.js'
import eventoService from '../js/services/eventoService.js'
import apuestaService from '../js/services/apuestaService.js'

window.BASE_URL = "http://localhost:3000";

export const app = angular.module('app', ['ui.router', 'ui-notification', 'localytics.directives', uiBootstrap]);

routes(app);
<<<<<<< HEAD


=======
UrlHelper(app);
>>>>>>> 7e7ba1119829b4a7aa9f3ecc2de2c74eff80cc54
deporteCtrl(app);
deporteService(app);
torneoCtrl(app);
torneoService(app);
premioCtrl(app);
premioService(app);
equipoCtrl(app);
equipoService(app);
<<<<<<< HEAD
eventoCtrlAdmin(app);
=======
eventoCtrl(app);
eventoService(app);
apuestaCtrl(app);
apuestaService(app);
>>>>>>> 7e7ba1119829b4a7aa9f3ecc2de2c74eff80cc54

app.config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
  $locationProvider.html5Mode(true);
});

