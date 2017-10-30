'use strict';

var getUrl = window.location.origin;
var BASE_URL = getUrl;//getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
const API_BASE_URL = BASE_URL + "/api/apuesta";

export default function (app) {
    app.factory('ApuestaService', ['$http', '$q', function ($http, $q) {

        var factory = {
            getApuestas: getApuestas,
            getById: getById,
            modificar: modificar,
            saveApuesta: saveApuesta,
        };

        return factory;

        function getApuestas() {
            return $http({
                method: 'GET',
                url: API_BASE_URL + '/getAll'
            });
        }

        function getById(data) {
            debugger
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/getById' ,
                data: data
            });
        }

        function modificar(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/modificar',
                data: data
            });
        }

        function saveApuesta(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/alta',
                data: data
            });
        }
    }]);
}