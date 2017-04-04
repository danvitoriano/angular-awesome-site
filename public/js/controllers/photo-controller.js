angular.module('main')
	.controller('PhotoController', function($scope, photoService, $routeParams, photoRegisterService){

		$scope.photo = {};
		$scope.message = '';

		// se for passado um photoId como paramentro para alterar uma photo
		if($routeParams.photoId){

			photoService.get({photoId: $routeParams.photoId}, function(photo){
				$scope.photo = photo;
			}, function(error){
				console.log(error);
				$scope.message = 'não achou a photo';
			});

		};

		$scope.submit = function(){
			// console.log($scope.photo);
			if($scope.formPhoto.$valid){

				photoRegisterService.register($scope.photo)
				.then(function(data){
					$scope.message = data.message;
					if(data.include) {
						$scope.photo = {};
					};
					$scope.focused = true;
				})
				.catch(function(error){
					$scope.message = error.message;
				});
			}
		};
	});