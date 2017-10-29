'use strict';

var getUrl = window.location.origin;
var BASE_URL = getUrl;//getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
const API_BASE_URL = BASE_URL + "/api/evento";

export default function (app) {
    app.factory('EventoService', ['$http', '$q', function ($http, $q) {

        var factory = {
            getEventos: getEventos,
            modificar: modificar,
            saveEvento: saveEvento,
        };

        return factory;

        function getEventos() {
            return $http({
                method: 'GET',
                url: API_BASE_URL + '/getAll'
            });
        }

        function modificar(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/modificar',
                data: data
            });
        }

        function saveEvento(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/alta',
                data: data
            });
        }
    }]);
}