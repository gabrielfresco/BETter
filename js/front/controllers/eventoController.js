'use strict';

export default function(app) {
	app.controller('EventoController', ['$scope', '$timeout', '$q', 'UrlHelper', 'EventoService', 'Notification',     
	    function ($scope, $timeout, $q, UrlHelper, EventoService, Notification) {
		
        const self = this;
        
        this.eventos;

        this.apostar = (evento) => {
            UrlHelper.go('apostar', {id: evento._id}, true);
        }

		function getAll() {
			EventoService.getEventos()
            .then(
                function(d) {
                    self.eventos = d.data;
                    console.log(self.eventos)
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado')
                    console.error('Error recuperando equipos');
                }
            );
		}
        
        getAll();
	}]);
}
