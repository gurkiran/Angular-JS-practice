'use strict';

angular.module('myApp.dataService', [])

.service('dataService', ['$http', function($http) {
  return {
      getData: function() {
          return $http.get('../../data/data.json');
      }
  }
}]);
