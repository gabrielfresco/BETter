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
                    if(d.data.status != 401) {
                        Notification.success('Guardado correctamente')
                        self.evento = {};  
                    } else {
                        Notification.error('Se produjo un error')
                    }
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
