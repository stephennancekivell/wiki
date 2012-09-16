'use strict';

function ViewControl($scope, $location, $routeParams, Documents) {
	$scope.document = Documents.get({'id': $routeParams.id});

	$scope.remove = function(){
		$scope.document.$delete({'id': $scope.document.id});
		$location.path('/');
	}
}

function NewDocumentCtrl($scope, Documents){
	$scope.document = new Documents({title:'title', body:'content'});
	$scope.document.$save();

	$scope.remove = function(){
		$scope.document.$delete({'id': $scope.document.id});
		$location.path('/');
	}
}

function ListControl($scope, Documents) {
	$scope.documents = Documents.query();
}