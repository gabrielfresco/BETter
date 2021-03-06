'use strict'

export default function (app) {
    // configure our routes
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider       
            .state('home', {
                url: `/home`,
                templateUrl: `${window.BASE_URL}/resources/views/front/eventos.html`,
                controller: 'EventoController',
                controllerAs: 'eventoCtrl'
            })
            .state('listaDeportes', {
                url: `/admin/deportes/lista`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/deportes/index.html`,
                controller: 'DeporteController',
                controllerAs: 'deporteCtrl'
            })
            .state('crearDeporte', {
                url: `/admin/deportes/crear`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/deportes/crear.html`,
                controller: 'DeporteController',
                controllerAs: 'deporteCtrl'
            })
            .state('listaEquipos', {
                url: `/admin/equipos/lista`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/equipos/index.html`,
                controller: 'EquipoController',
                controllerAs: 'equipoCtrl'
            })
            .state('crearEquipo', {
                url: `/admin/equipos/crear`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/equipos/crear.html`,
                controller: 'EquipoController',
                controllerAs: 'equipoCtrl'
            })
            .state('editarEquipo', {
                url: `/admin/equipos/crear/{id:string}`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/equipos/crear.html`,
                controller: 'EquipoController',
                controllerAs: 'equipoCtrl'
            })
            .state('listaPremios', {
                url: `/admin/premios/lista`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/premios/index.html`,
                controller: 'PremioController',
                controllerAs: 'premioCtrl'
            })
            .state('crearPremio', {
                url: `/admin/premios/crear`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/premios/crear.html`,
                controller: 'PremioController',
                controllerAs: 'premioCtrl'
            })
            .state('premiosEntregados', {
                url: `/admin/premios/entregados`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/premios/ultimos.html`,
                controller: 'PremioController',
                controllerAs: 'premioCtrl'
            })
            .state('listaEventos', {
                url: `/admin/eventos/lista`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/eventos/index.html`,
                controller: 'EventoControllerAdmin',
                controllerAs: 'eventoCtrlAdmin'
            })
            .state('crearEvento', {
                url: `/admin/eventos/crear`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/eventos/crear.html`,
                controller: 'EventoControllerAdmin',
                controllerAs: 'eventoCtrlAdmin'
            })
            .state('listaTorneos', {
                url: `/admin/torneos/lista`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/torneos/index.html`,
                controller: 'TorneoController',
                controllerAs: 'torneoCtrl'
            })
            .state('crearTorneo', {
                url: `/admin/torneos/crear`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/torneos/crear.html`,
                controller: 'TorneoController',
                controllerAs: 'torneoCtrl'
            })
            .state('listaUsuarios', {
                url: `/admin/usuarios/lista`,
                templateUrl: `${window.BASE_URL}/resources/views/admin/usuarios/index.html`,
                /*controller: 'HomeController',
                controllerAs: 'homeCtrl'*/
            })
            .state('apostar', {
                url: `/apostar/{id:string}`,
                templateUrl: `${window.BASE_URL}/resources/views/front/apuesta.html`,
                controller: 'ApuestaController',
                controllerAs: 'apuestaCtrl'
            })
            .state('premios', {
                url: `/premios`,
                templateUrl: `${window.BASE_URL}/resources/views/front/premios.html`,
                /*controller: 'HomeController',
                controllerAs: 'homeCtrl'*/
            })
            .state('ranking', {
                url: `/ranking`,
                templateUrl: `${window.BASE_URL}/resources/views/front/ranking.html`,
                /*controller: 'HomeController',
                controllerAs: 'homeCtrl'*/
            })
    }]);
}
