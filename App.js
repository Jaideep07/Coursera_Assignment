(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchController', LunchController);
    
    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
      $scope.Lunchfuc = function(remark) {
        var sum=0;
        for (let i = 0; i < ($scope.remark).length; i++) {
          if(($scope.remark).charCodeAt(i)==44){
            sum++;
          }
        }
          if(($scope.remark).length===0)
          {
            $scope.remark="Please enter data first"
          }
          else if(sum+1<=3)
          {
            $scope.remark="Enjoy!"
          }
          else if(sum+1>3)
          {
            $scope.remark="Too much!"
          }
        }
      }
     
})();