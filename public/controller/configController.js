'use strict';
app.controller('configController', ['$scope', '$timeout', '$http', function($scope, $timeout, $http) {
    var roleModel = {
        name: '',
        module: []
    }
    var modules = []
    $scope.empty = false;
    $scope.showDetails = false;
    $scope.showAdd = false;
    $scope.modules = modules;
    $scope.roleModel = roleModel;
    $scope.subChange = false;
    $scope.parentChange = false;

    // PAGE FUNCTIONS
    $scope.ShowAdd = function() {
        $scope.showAdd = true
    }

    // CARGA LOS MODULOS Y SUBMODULOS
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
        $scope.modules = response.data.data;
        console.log($scope.modules)
    }, function myError(response) {
        $scope.modules = [];
    });

    // ADD ROLE 
    var roleSettings = {
      async: true,
      crossDomain: true,
      url: "/add-role",
      data:$scope.modules,
      method: "POST",
      headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "no-cache"
      }
  };
$scope.add = function(){
  $http(roleSettings).then(function mySuccess(response) {
     console.log(response)
  }, function myError(response) {
      $scope.role = [];
  });
}
  
}])
.directive('isActive', function($timeout) {
    return {
        link: function(scope, elem, attrs) {
            elem.bind("click", function() {
                $timeout(function() {
                    var isActive = elem.hasClass("active")
                    if (isActive) {
                        var parent = elem[0].dataset.parent;
                        var $obj = [];
                        var $sub = [];
                        var moduleName;
                        var isExists = false;
                        var isExistsSub = false;
                        if (parent === "parent") {
                            moduleName = elem.parent().parent().find("h5")[0].innerHTML
                            $.each(scope.roleModel.module, function(v, k) {
                                if (k.name === moduleName) {
                                    isExists = true
                                    return false;
                                }
                            })
                            if (isExists === false) {
                                $obj = {
                                    name: moduleName,
                                    action: [{
                                        name: elem[0].name
                                    }],
                                    sub: [{name:"all"}]
                                }
                                scope.roleModel.module.push($obj)
                                $obj = {}
                            }else{
                              $obj = {name: elem[0].name}
                              scope.roleModel.module[0].action.push($obj)
                              $obj = {} 
                            }
                        }else{
                          moduleName = elem.parentsUntil()[3].id
                          $.each(scope.roleModel.module, function(v, k) {
                            if (k.name === moduleName) {
                                isExists = true
                                return false;
                            }
                        })
                        if (isExists === false) {
                            $obj = {
                                name: moduleName,
                                action: [{
                                    name: elem[0].name
                                }],
                                sub: [{
                                  name:elem[0].dataset.parent,
                                  action:[{name:elem[0].name}]
                                }]
                            }
                            scope.roleModel.module.push($obj)
                            $obj = {}
                        }else{
                          $obj = {name: elem[0].name};
                          $sub ={
                            name:elem[0].dataset.parent,
                            action:[elem[0].name]
                          }
                          scope.roleModel.module[0].action.push($obj)
                          $.each(scope.roleModel.module[0].sub, function(v, k) {
                            if (k.name === elem[0].dataset.parent) {
                                isExistsSub = true
                                return false;
                            }
                          })
                          if(isExistsSub === false){
                            scope.roleModel.module[0].sub.push($sub)
                          }else{
                            $obj = {name: elem[0].name};
                            scope.roleModel.module[0].sub[0].action.push($obj)
                          }
                          
                          $obj = {} 
                          $sub = {}
                        }
                        }

                    }
                    console.log(scope.roleModel)
                }, 600)

            })
            elem.bind("blur",function(){
              if(elem[0].id === "formA05" ){
                scope.roleModel.name = elem[0].value
              }
            })
        }
    }
});