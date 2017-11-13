'use strict';

export default function(app) {
	app.controller('EquipoController', ['$scope', '$timeout', '$q', '$stateParams', 'UrlHelper', 'EquipoService', 'DeporteService', 'Notification', 'Upload',     
	    function ($scope, $timeout, $q, $stateParams, UrlHelper, EquipoService,DeporteService, Notification, Upload) {
		
		const self = this;
        this.equipo = {};
        this.equipos;
        this.deportes = [];
        this.file;
        this.isEdit = $stateParams.id;

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

            if(!self.isEdit) {
                EquipoService.saveEquipo(params)
                .then(
                    function(d) {
                        getEquipos();
                        if(d.data.status != 401) {
                            self.upload(self.file, d.data._id);
                            Notification.success('Guardado correctamente')
                            self.equipo = {};  
                        } else {
                            Notification.error('Se produjo un error')
                        }
                    },
                    function(errResponse){
                        Notification.error('Se produjo un error')
                        console.error('Error recuperando equipos');
                    }
                );
            } else {
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
        }

        this.getImg = (id) => {
            return '../../resources/assets/' + id +'.png'
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
        
        function getDeportesActivos() {
			DeporteService.getDeportes()
            .then(
                function(d) {
                	self.deportes = d.data;
                },
                function(errResponse){
                	Notification.error('Se produjo un error al mostrar el listado de deportes')
                    console.error('Error recuperando deportes');
                }
            );
        }
        
        function getEquipo() {
            let params = { id : $stateParams.id }
			EquipoService.getById(params)
            .then(
                function(d) {
                	self.equipo = d.data[0];
                },
                function(errResponse){
                	Notification.error('Se produjo un error al buscar el equipo')
                    console.error('Error recuperando equipo');
                }
            );
        }

        this.upload = function (file, nombre) {
            Upload.upload({
                url: "http://localhost:3000/api/upload",
                data: {file: file, nombre: nombre}
            }).then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };

        this.editar = (equipo) => {
            UrlHelper.go('editarEquipo', {id: equipo._id}, true);
        }


        if(this.isEdit)
            getEquipo();
        getDeportesActivos();
        getEquipos();
	}]);
}
