'use strict';

export default function(app) {
	app.controller('ApuestaController', ['$scope', '$timeout', '$q', '$stateParams','UrlHelper', 'ApuestaService', 'Notification',     
	    function ($scope, $timeout, $q, $stateParams, UrlHelper, ApuestaService, Notification) {
		
        const self = this;
        
        this.apuesta;

        this.apostar = (evento) => {
            UrlHelper.go('apostar', {id: evento._id}, true);
        }

		function getApuesta() {
			ApuestaService.getById($stateParams.id)
            .then(
                function(d) {
                    self.apuesta = d.data;
                    console.log(self.apuesta)
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado')
                    console.error('Error recuperando equipos');
                }
            );
		}
        
        getApuesta();
	}]);
}