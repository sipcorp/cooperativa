'use strict';
app.controller('homeController', ['$scope','$timeout', "$http", 'Dataservice', function($scope,$timeout,$http,Dataservice) {
    var modules =[]
    var modulet = []
    var roles = []
 $scope.modules = modules;
 $scope.module = modulet;   
 $scope.role = roles
  // Load Roles
  Dataservice.GetRoles().then(function (response) {
    $scope.role = response.data.role;
    console.log($scope.role)
}, function myError(response) {
    $scope.modules = [];
});


var role = $("#role").val()
if(role === "ADMIN"){
    $http(settings).then(function mySuccess(response) {
        $scope.modules = response.data.data;
        var object ={}
        $.each($scope.modules,function(v,k){
            for(var i=0;i<k.name.length;i++) {
                object = {
                    name:k.name[i].name,
                    font:k.name[i].font,
                    href:k.name[i].href
                }
                $scope.module.push(object) 
                object ={}
              }
        })
    }, function myError(response) {
        $scope.modules = [];
    });
}
}]);