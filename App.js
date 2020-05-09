'use strict';
(function (){

  angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController)


    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope){
    $scope.items='';
    $scope.msg='Enter Something';

    $scope.checkText=function(){
      if($scope.items.length==0)
      {
        $scope.msg='Enter Something';
        return;

      }
      else
        {
          let lenlist=$scope.items.split(',').filter(value => value.trim().length!=0,);
          if(lenlist.length <= 3)
          {
            $scope.msg='Enjoy!';
          }
          else {
            $scope.msg='Too much!';



          }

      }
    }
  }
}) ();
