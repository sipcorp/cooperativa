'use strict';
app.controller('configController', ['$scope','$timeout', '$http',function($scope,$timeout,$http) {
var modules=[]
$scope.empty = false;
$scope.showDetails = false;
$scope.showAdd = false;
$scope.modules = modules;
$scope.subChange = false;
$scope.parentChange = false;

// PAGE FUNCTIONS
$scope.ShowAdd = function(){
    $scope.showAdd = true 
}
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "/get-module",
    "method": "POST",
    "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-cache"
    }
};

$http(settings).then(function mySuccess(response) {
    $scope.modules  = response.data.data;
    console.log($scope.modules)
  }, function myError(response) {
    $scope.modules = [];
  });


}]);