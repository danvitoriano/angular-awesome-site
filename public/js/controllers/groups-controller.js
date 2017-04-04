angular.module('main')
	.controller('GroupsController', function($scope, $http){
		$scope.groups = [];

		$http.get('/v1/grupos/')
		.success(function(groups){
			$scope.groups = groups;
		})
		.error(function(error){
			console.log(error);
		});
	})