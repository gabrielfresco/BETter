'use strict';

export default function(app) {
	app.controller('EventoControllerAdmin', ['$scope', '$timeout', '$q', 'EventoService', 'Notification',     
	    function ($scope, $timeout, $q, UrlHelper, EventoService, Notification) {
		
		const self = this;
        
        this.evento = {};
        this.eventos;

        this.modificarEvento = (evento) => {
            UrlHelper.go('crearEvento', {id: evento._id}, true);
        }

        this.save = () => {
            let params = { evento: self.evento }

            EventoService.saveEvento(params)
            .then(
                function(d) {
                    Notification.success('Guardado correctamente')
                    getEventos();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error recuperando eventos');
                }
            );
        }

		function getEventos() {
			EventoService.getEventos()
            .then(
                function(d) {
                	self.eventos = d.data;
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado')
                    console.error('Error recuperando eventos');
                }
            );
		}
        
        getEventos();
	}]);
}
