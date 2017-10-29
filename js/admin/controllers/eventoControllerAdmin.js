'use strict';

export default function(app) {
	app.controller('EventoControllerAdmin', ['$scope', '$timeout', '$q', 'EventoService', 'Notification',     
	    function ($scope, $timeout, $q, EventoService, Notification) {
		
		const self = this;
        
        this.premio = {};
        this.premios;

        this.cambiarEstado = (premio) => {
            let estado = 'activo';

            if(premio.estado == 'activo')
                estado = 'inactivo'

            premio.estado = estado
            
            let params = { premio : premio }
            
            EventoService.modificar(params)
            .then(
                function(d) {
                    Notification.success('Actualizado correctamente')
                    getEventos();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error actulizando el estado');
                }
            );
        }

        this.save = () => {
            let params = { premio: self.premio }

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
                	self.premios = d.data;
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado')
                    console.error('Error recuperando premios');
                }
            );
		}
        
        getEventos();
	}]);
}
