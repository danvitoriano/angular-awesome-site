angular.module('customDirectives', [])
	.directive('customPanel', function(){
		var ddo = {};
		
		ddo.restrict = "AE";

		ddo.transclude = true;
		
		ddo.scope = {
			titulo: '@' //use same prop-name value as a string
		};

		ddo.templateUrl = 'js/directives/custom-panel.html';

		return ddo;
	})
	.directive('myPhoto', function(){
		var ddo = {};
		ddo.restrict = "AE";
		ddo.scope = {
			titulo: '@',
			url: '@'
		};
		ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

		return ddo;

	})
	.directive('myDangerButton', function(){
		var ddo = {};
		ddo.restrict = "E";
		ddo.scope = {
			name : '@',
			action : '&'
		};
		ddo.template = '<button class="btn btn-danger btn-block" ng-click="action()">{{name}}</button>';
		return ddo;
	})
	.directive('myFocus', function(){
		var ddo = {};
		ddo.restrict = "A";
		ddo.scope = {
			focused: '='
		};
		ddo.link = function(scope, element){
			//escopo da diretiva
			scope.$watch('focused', function(){
				if(scope.focused){
					element[0].focus();
					scope.focused = false;
				}
			});
		};
		return ddo;
	})