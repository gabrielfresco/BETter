'use strict';

var getUrl = window.location.origin;
var BASE_URL = getUrl;//getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
const API_BASE_URL = BASE_URL + "/api/deporte";

export default function (app) {
    app.factory('DeporteService', ['$http', '$q', function ($http, $q) {

        var factory = {
            getDeportes: getDeportes,
            modificar: modificar,
            saveDeporte: saveDeporte,
        };

        return factory;

        function getDeportes() {
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

        function saveDeporte(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/alta',
                data: data
            });
        }
    }]);
}