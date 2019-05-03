'use strict';
app.controller('configController', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {
    var roleModel = {
        name: '',
        module: []
    }
    var modules = []
    $scope.empty = false;
    $scope.showDetails = false;
    $scope.showError = false;
    $scope.showAdd = false;
    $scope.modules = modules;
    $scope.roleModel = roleModel;
    $scope.subChange = false;
    $scope.parentChange = false;
    $scope.error = ''

    // PAGE FUNCTIONS
    $scope.ShowAdd = function () {
        $scope.showAdd = true
    }

    // CARGA LOS MODULOS Y SUBMODULOS
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "/get-module",
        "method": "GET",
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
    $scope.add = function () {
        // ADD ROLE 
        var obj = JSON.stringify($scope.roleModel);
        var roleSettings = {
            async: true,
            crossDomain: true,
            url: "/add-role",
            data: obj,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-cache"
            }
        };
        console.log(obj)
        $.ajax({
            url: '/add-role',
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Cache-Control": "no-cache"
            },
            method: 'POST',
            dataType: 'json',
            data: obj,
            success: function (data) {
                var code = data.message.code
                if(code === 11000){
                $scope.showError = true
                $scope.error = "El role ya existe.." 
                }
            }
        });
    }
    $scope.check = function (event) {
        var elem = event.currentTarget
        var isActive = elem.className.indexOf("active") > 0 ? false : true
        if (isActive && elem.id != "formA05") {
            var parent = elem.dataset.parent;
            var $obj = [];
            var $sub = [];
            var moduleName;
            var isExists = false;
            var isExistsSub = false;
            if (parent === "parent") {
                moduleName = elem.parentNode.parentNode.id
                $.each(roleModel.module, function (v, k) {
                    if (k.name === moduleName) {
                        isExists = true
                        return false;
                    }
                })
                if (isExists === false) {
                    $obj = {
                        name: moduleName,
                        action: [{
                            name: elem.name
                        }],
                        sub: []
                    }
                    roleModel.module.push($obj)
                    $obj = {}
                } else {
                    var actionIN = false
                    $obj = { name: elem.name }
                    $.each(roleModel.module[0].action,function(v,k){
                        if(k.name === elem.name){
                            actionIN = true
                        }
                    })
                    if(actionIN === false){
                       roleModel.module[0].action.push($obj) 
                    }
                    $obj = {}
                }
            } else {
                moduleName = elem.offsetParent.parentNode.parentNode.parentNode.id
                $.each(roleModel.module, function (v, k) {
                    if (k.name === moduleName) {
                        isExists = true
                        return false;
                    }
                })
                if (isExists === false) {
                    $obj = {
                        name: moduleName,
                        action: [{
                            name: elem.name
                        }],
                        sub: [{
                            name: elem.dataset.parent,
                            action: [{ name: elem.name }]
                        }]
                    }
                    roleModel.module.push($obj)
                    $obj = {}
                } else {
                    $obj = { name: elem.name };
                    $sub = {
                        name: elem.dataset.parent,
                        action: [elem.name]
                    }
                    roleModel.module[0].action.push($obj)
                    $.each(roleModel.module[0].sub, function (v, k) {
                        if (k.name === elem.dataset.parent) {
                            isExistsSub = true
                            return false;
                        }
                    })
                    if (isExistsSub === false) {
                        roleModel.module[0].sub.push($sub)
                    } else {
                        $obj = { name: elem.name };
                        roleModel.module[0].sub[0].action.push($obj)
                    }
                    $obj = {}
                    $sub = {}
                }
            }

        }
        if (elem.id === "formA05") {
            roleModel.name = elem.value
        }
        console.log($scope.roleModel)
    }
}]);
