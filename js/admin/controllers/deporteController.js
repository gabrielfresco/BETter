'use strict';

export default function(app) {
	app.controller('DeporteController', ['$scope', '$timeout', '$q', 'DeporteService', 'Notification',     
	    function ($scope, $timeout, $q, DeporteService, Notification) {
		
		const self = this;
        this.deporte = {};
        this.deportes;

        this.cambiarEstado = (deporte) => {
            let estado = 'activo';

            if(deporte.estado == 'activo')
                estado = 'inactivo'

            deporte.estado = estado; 

            let params = { deporte : deporte }

            DeporteService.modificar(params)
            .then(
                function(d) {
                    Notification.success('Actualizado correctamente')
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
                    if(d.data.status != 401) {
                        Notification.success('Guardado correctamente')
                        self.deporte = {};  
                    } else {
                        Notification.error('Se produjo un error')
                    }
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
