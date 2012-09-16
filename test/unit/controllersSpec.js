'use strict';

describe('app', function(){

  // add util matcher
  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  describe('ListControl', function(){
    var listCtrl, scope, $httpBackend;

    beforeEach(module('rest'));

    // Initialize the controller, a mock scope and mock httpBackend
    beforeEach(inject(function($controller, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://127.0.0.1/play/documents').
        respond([{id:'1', title:'title1',body:'body1'}]);

      scope = {};
      listCtrl = $controller('ListControl', {$scope: scope});
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should ....', function() {
      expect(scope.documents).toEqualData([]);

      $httpBackend.flush();

      expect(scope.documents).toEqualData([{id:'1', title:'title1',body:'body1'}]);
    });
  });
});