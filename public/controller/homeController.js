'use strict';
app.controller('homeController', ['$scope','$timeout', "$http", function($scope,$timeout,$http) {
    var modules =[]
    var modulet = []
 $scope.modules = modules;
 $scope.module = modulet;   
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