angular.module('meusServicos', ['ngResource'])
	.factory('recursoFoto', function($resource){

		//devolve $resource já configurado
		return $resource('/v1/fotos/:fotoId', null, {
			'update': {
				method: 'PUT'
			}
		});
	})
	.factory('CadastroDeFotos', function(recursoFoto, $q){
		var service = {};
		service.cadastrar = function(foto){
			return $q(function(resolve, reject){
				if (foto._id){
					recursoFoto.update({fotoId: foto._id}, foto, function(){
						resolve({
							mensagem: 'foto ' + foto.titulo + ' atualizada',
							inclusao: false
						});
					}, function(erro){
						console.log(erro);
						reject({
							mensagem: 'não atualizou ' + foto.titulo
						});
					});
				} else {
					recursoFoto.save(foto, function(){
						resolve({
							mensagem: 'foto ' + foto.titulo + ' carregada',
							inclusao: true
						});
					}, function(erro){
						console.log(erro);
						reject({
							mensagem: 'nao carregou ' +foto.titulo
						});
					});
				}
			});

		};
		return service;
	})