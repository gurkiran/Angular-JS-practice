'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope','$http', 'dataService', function($scope, $http, dataService) {
   dataService.getData()
    .then(function(res) {
      $scope.data = res.data;    
    });

    $scope.sorting = {
      column: '',
      desc : false
    }

    $scope.changeSort = function(column) {
      var sorting = $scope.sorting;
      if(sorting.column == column) {
        sorting.desc = !sorting.desc;
      } else {
        sorting.column = column;
        sorting.desc = false;
      }
    }
}]);