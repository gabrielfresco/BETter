'use strict';

var getUrl = window.location.origin;
var BASE_URL = getUrl;//getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
const API_BASE_URL = BASE_URL + "/api/premio";

export default function (app) {
    app.factory('PremioService', ['$http', '$q', function ($http, $q) {

        var factory = {
            getPremios: getPremios,
            modificar: modificar,
            savePremio: savePremio,
        };

        return factory;

        function getPremios() {
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

        function savePremio(data) {
            return $http({
                method: 'POST',
                url: API_BASE_URL + '/alta',
                data: data
            });
        }
    }]);
}