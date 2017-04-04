// public/js/controllers/photos-controller.js

angular.module('main').controller('PhotosController', function($scope, photoService){

	$scope.photos = [];
	$scope.filter = '';
	$scope.message = '';

	photoService.query(function(photos){
		$scope.photos = photos;
	}, function(error){
		console.log(error);
	});

	$scope.remove = function(photo){

		photoService.delete({photoId: photo._id}, function(){
			var indexPhoto = $scope.photos.indexOf(photo);
			$scope.photos.splice(indexPhoto, 1);
			$scope.message = 'photo ' + photo.titulo + ' removida';
			console.log('photo removida');
		}, function(error){
			console.log(error);
			$scope.message = 'error ao apagar a photo ' + photo.titulo;
		});

	};


});
