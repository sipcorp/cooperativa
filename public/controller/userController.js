'use strict';
app.controller('userController', ['$scope', 'Dataservice', function ($scope, Dataservice) {
  /*################################################### */
  //                GLOBAL VAR ANGULAR JS 
  /*################################################### */
  $scope.newUser = false;
  $scope.listUser = true;
  $scope.seeNewUser = function () {
    $scope.newUser = true;
    $scope.listUser = false;
   
    console.log($scope.roles)
  }
 /*######################################################## */
    //         SERVICE LOAD MODULES AND ROLES OF USERS 
    /*######################################################## */
    function getRole() {
      Dataservice.GetRoles().then(function (response) {
          $scope.roles = response.data.role;
      }, function myError(response) {
          $scope.modules = [];
      });
  }
  getRole()
 
}]);