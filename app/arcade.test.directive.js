(function(){
  'use strict';

  arcade
    .module('arcade.test')
    .directive('arcadeTest', arcadeTest);

  function arcadeTest(){
    return {
      restrict: 'E',
      templateUrl: '../templates/arcade-test.html',
      controllerAs: 'vm',
      controller: 'TestController',
      bindToController: true
    }
  }
})
