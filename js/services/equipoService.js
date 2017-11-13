'use strict';

var getUrl = window.location.origin;
var BASE_URL = getUrl;//getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
const API_BASE_URL = BASE_URL + "/api/equipo";

export default function (app) {
    app.factory('EquipoService', ['$http', '$q', function ($http, $q) {

        var factory = {
            getEquipos: getEquipos,
            modificar: modificar,
            saveEquipo: saveEquipo,
            getById: getById,
        };

        return factory;

        function getEquipos() {
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

        function getById(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/getById' ,
                data: data
            });
        }

        function saveEquipo(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/alta',
                data: data
            });
        }
    }]);
}