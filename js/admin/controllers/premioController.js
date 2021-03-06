'use strict';

export default function(app) {
	app.controller('PremioController', ['$scope', '$timeout', '$q', 'PremioService', 'Notification',     
	    function ($scope, $timeout, $q, PremioService, Notification) {
		
		const self = this;
        
        this.premio = {};
        this.premios;

        this.cambiarEstado = (premio) => {
            let estado = 'activo';

            if(premio.estado == 'activo')
                estado = 'inactivo'

            premio.estado = estado
            
            let params = { premio : premio }
            
            PremioService.modificar(params)
            .then(
                function(d) {
                    Notification.success('Actualizado correctamente')
                    getPremios();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error actulizando el estado');
                }
            );
        }

        this.save = () => {
            console.log(self);
            
            let params = { premio: self.premio }
            console.log("Ahora params:", params);

            PremioService.savePremio(params)
            .then(
                function(d) {
                    if(d.data.status != 401) {
                        Notification.success('Guardado correctamente')
                        self.premio = {};  
                    } else {
                        Notification.error('Se produjo un error')
                    }
                    getPremios();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error recuperando premios');
                }
            );
            
        }

		function getPremios() {
			PremioService.getPremios()
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
        
        getPremios();
	}]);
}
