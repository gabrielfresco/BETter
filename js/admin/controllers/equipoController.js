'use strict';

export default function(app) {
	app.controller('EquipoController', ['$scope', '$timeout', '$q', 'EquipoService', 'Notification',     
	    function ($scope, $timeout, $q, EquipoService, Notification) {
		
		const self = this;
        
        this.equipo = {};
        this.equipos;

        this.cambiarEstado = (equipo) => {
            let estado = 'activo';

            if(equipo.estado == 'activo')
                estado = 'inactivo'

            equipo.estado = estado
            
            let params = { equipo : equipo }
            
            EquipoService.modificar(params)
            .then(
                function(d) {
                    Notification.success('Actualizado correctamente')
                    getEquipos();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error actulizando el estado');
                }
            );
        }

        this.save = () => {
            let params = { equipo: self.equipo }

            EquipoService.saveEquipo(params)
            .then(
                function(d) {
                    Notification.success('Guardado correctamente')
                    getEquipos();
                },
                function(errResponse){
                	Notification.error('Se produjo un error')
                    console.error('Error recuperando equipos');
                }
            );
        }

		function getEquipos() {
			EquipoService.getEquipos()
            .then(
                function(d) {
                	self.equipos = d.data;
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado')
                    console.error('Error recuperando equipos');
                }
            );
		}
        
        getEquipos();
	}]);
}
