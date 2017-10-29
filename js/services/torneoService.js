'use strict';

var getUrl = window.location.origin;
var BASE_URL = getUrl;//getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
const API_BASE_URL = BASE_URL + "/api/torneo";

export default function (app) {
    app.factory('TorneoService', ['$http', '$q', function ($http, $q) {

        var factory = {
            getTorneos: getTorneos,
            modificar: modificar,
            saveTorneo: saveTorneo,
        };

        return factory;

        function getTorneos() {
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

        function saveTorneo(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/alta',
                data: data
            });
        }
    }]);
}