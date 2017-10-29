'use strict';

export default function(app) {
	app.controller('DeporteController', ['$scope', '$timeout', '$q', 'DeporteService', 'Notification',     
	    function ($scope, $timeout, $q, DeporteService, Notification) {
		
		const self = this;
        
        this.deporte = {};
        this.deportes;

        this.eliminar = (id) => {
            let params = {
                id: id
            }
            DeporteService.eliminar(params)
            .then(
                function(d) {
                    Notification.success('Dado de baja correctamente')
                    getDeportes();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error recuperando deportes');
                }
            );
        }

        this.save = () => {
            let params = { deporte: self.deporte }

            DeporteService.saveDeporte(params)
            .then(
                function(d) {
                    Notification.success('Guardado correctamente')
                    getDeportes();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error recuperando deportes');
                }
            );
        }

		function getDeportes() {
			DeporteService.getDeportes()
            .then(
                function(d) {
                	self.deportes = d.data;
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado')
                    console.error('Error recuperando deportes');
                }
            );
		}
        
        getDeportes();
	}]);
}
