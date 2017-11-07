'use strict';

export default function(app) {
	app.controller('TorneoController', ['$scope', '$timeout', '$q', 'TorneoService', 'Notification',     
	    function ($scope, $timeout, $q, TorneoService, Notification) {
		
		const self = this;
        
        this.torneo = {};
        this.torneos;

        this.cambiarEstado = (torneo) => {
            let estado = 'activo';

            if(torneo.estado == 'activo')
                estado = 'inactivo'

            torneo.estado = estado
            
            let params = { torneo : torneo }
            
            TorneoService.modificar(params)
            .then(
                function(d) {
                    Notification.success('Actualizado correctamente')
                    getTorneos();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error actulizando el estado');
                }
            );
        }

        this.save = () => {
            console.log(self);
            
            let params = { torneo: self.torneo }
            console.log("Ahora params:", params);

            TorneoService.saveTorneo(params)
            .then(
                function(d) {
                    Notification.success('Guardado correctamente')
                    getTorneos();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error recuperando torneos');
                }
            );
            
        }

		function getTorneos() {
			TorneoService.getTorneos()
            .then(
                function(d) {
                	self.torneos = d.data;
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado')
                    console.error('Error recuperando torneos');
                }
            );
		}
        
        getTorneos();
	}]);
}
