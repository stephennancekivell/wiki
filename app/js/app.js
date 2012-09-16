'use strict';

angular.module('App', ['rest']).
config(function($routeProvider) {
	$routeProvider.
	when('/', {controller:ListControl, templateUrl:'partials/list.html'}).
	when('/document/:id',{controller:ViewControl, templateUrl:'partials/document.html'}).
	when('/edit/:id',{controller:ViewControl, templateUrl:'partials/edit.html'}).
	when('/new',{controller:NewDocumentCtrl, templateUrl:'partials/edit.html'}).
	otherwise({redirectTo:'/'});
});