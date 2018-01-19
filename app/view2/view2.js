'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/task2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','dataService', function($scope, dataService) {

  $scope.categories = [];


  dataService.getData()
    .then(function(res) {
      $scope.data = res.data;
      res.data.forEach(function(datum) {
        if($scope.categories.indexOf(datum.category) == -1) {
          $scope.categories.push(datum.category);
        }
      });

      $scope.categories.sort();

      $scope.displayData = _.groupBy($scope.data, 'name');


      for(var arr in $scope.displayData) {
        var compare = [];
        while($scope.displayData[arr].length !== $scope.categories.length) {
          $scope.displayData[arr].map(function(l){
            compare.push(l.category);
          })
          var diff = _.difference($scope.categories, compare);
          for(let i = 0; i < diff.length; i++) {
            $scope.displayData[arr].push({category: diff[i]});
          }
        }
        $scope.displayData[arr] = _.sortBy($scope.displayData[arr], 'category');
      }      

      console.log($scope.displayData);

    })
}]);