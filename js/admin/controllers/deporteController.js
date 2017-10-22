'use strict';

export default function(app) {
	app.controller('DeporteController', ['$scope', '$timeout', '$q', 'DeporteService',     
	    function ($scope, $timeout, $q, DeporteService) {
		
		const self = this;
        
        this.deportes;

        this.eliminar = (id) => {
            let params = {
                id: id
            }
            DeporteService.eliminar(params)
            .then(
                function(d) {
                    console.log("dado de baja correctamente")
                    //getDeportes();
                },
                function(errResponse){
                	//Notification.error('Se produjo un error intentando recuperar el total de pedidos del día')
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
                	//Notification.error('Se produjo un error intentando recuperar el total de pedidos del día')
                    console.error('Error recuperando deportes');
                }
            );
		}
        
        getDeportes();
	}]);
}
