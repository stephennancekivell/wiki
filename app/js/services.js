'use strict';

angular.module('rest',['ngResource']).
factory('Documents', function($resource){
	var Documents = $resource("http://127.0.0.1/play/documents/:id",
		{},
		{ update: { method: 'PUT' }});

	Documents.prototype.update = function(cb) {
    return Documents.update({id: this.id},
        angular.extend({}, this, {id:undefined}), cb);
  };

	return Documents;
});