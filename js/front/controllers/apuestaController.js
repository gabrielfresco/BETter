'use strict';

export default function(app) {
	app.controller('ApuestaController', ['$scope', '$timeout', '$q', '$stateParams','UrlHelper', 'ApuestaService', 'EventoService', 'Notification',     
	    function ($scope, $timeout, $q, $stateParams, UrlHelper, ApuestaService, EventoService, Notification) {
		
        const self = this;
        
        this.evento;

        this.apostar = (evento) => {
            UrlHelper.go('apostar', {id: evento._id}, true);
        }

		function getEvento() {
            let params = { id: $stateParams.id }
			EventoService.getById(params)
            .then(
                function(d) {
                    self.evento = d.data[0];
                    console.log(self.evento)
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado')
                    console.error('Error recuperando equipos');
                }
            );
		}
        
        getEvento();
	}]);
}