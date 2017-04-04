angular.module('customServices', ['ngResource'])
	.factory('photoService', function($resource){

		//devolve $resource já configurado
		return $resource('/v1/fotos/:photoId', null, {
			'update': {
				method: 'PUT'
			}
		});
	})
	.factory('photoRegisterService', function(photoService, $q){
		var service = {};
		service.register = function(photo){
			return $q(function(resolve, reject){
				if (photo._id){
					photoService.update({photoId: photo._id}, photo, function(){
						resolve({
							message: 'photo ' + photo.titulo + ' atualizada',
							include: false
						});
					}, function(error){
						console.log(error);
						reject({
							message: 'não atualizou ' + photo.titulo
						});
					});
				} else {
					photoService.save(photo, function(){
						resolve({
							message: 'photo ' + photo.titulo + ' carregada',
							include: true
						});
					}, function(error){
						console.log(error);
						reject({
							message: 'nao carregou ' + photo.titulo
						});
					});
				}
			});

		};
		return service;
	})