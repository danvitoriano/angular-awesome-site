angular.module('alurapic')
	.controller('FotoController', function($scope, recursoFoto, $routeParams, CadastroDeFotos){

		$scope.foto = {};
		$scope.mensagem = '';

		// se for passado um fotoId como paramentro para alterar uma foto
		if($routeParams.fotoId){

			recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
				$scope.foto = foto;
			}, function(erro){
				console.log(erro);
				$scope.mensagem = 'não achou a foto';
			});

		};

		$scope.submeter = function(){
			// console.log($scope.foto);
			if($scope.formulario.$valid){

				CadastroDeFotos.cadastrar($scope.foto)
				.then(function(dados){
					$scope.mensagem = dados.mensagem;
					if(dados.inclusao) {
						$scope.foto = {};
					};
					$scope.focado = true;
				})
				.catch(function(erro){
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});