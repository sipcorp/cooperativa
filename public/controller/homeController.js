'use strict';
app.controller('homeController', ['$scope', '$timeout', "$http", 'Dataservice', function ($scope, $timeout, $http, Dataservice) {
    var modules = []
    var modulet = []
    var sub = []

    $scope.modules = modules;
    $scope.module = modulet;
    $scope.sub = sub;

    $http(settings).then(function mySuccess(response) {
        $scope.modules = response.data.data;
    }, function myError(response) {
        $scope.modules = [];
    });

    var role = $("#role").val()
    if (role === "ADMIN") {
        $timeout(function () {
            var object = {}
            $.each($scope.modules, function (v, k) {
                for (var i = 0; i < k.name.length; i++) {
                    object = {
                        name: k.name[i].name,
                        font: k.name[i].font,
                        href: k.name[i].href
                    }
                    $scope.module.push(object)
                    object = {}
                }
            })
        }, 500);

    } else {
        // Load Roles
        Dataservice.GetRoles().then(function (response) {
            var $role = response.data.role;
            $.each($role, function (v, k) {
                if (k.name === role) {
                    $scope.sub = k.module[0].sub
                }
            })
        }, function myError(response) {
            $scope.modules = [];
        });

        $timeout(function () {
            $.each($scope.sub, function (f, n) {
                var name = n.name
                var parent = '';
                var object = {}
                $.each($scope.modules, function (v, k) {
                    $.each(k.name, function (x, c) {
                        if (name === c.name) {
                            object = {
                                name: c.name,
                                font: c.font,
                                href: c.href
                            }
                            $scope.module.push(object)
                            object = {}
                            return false;
                        }
                    })
                })
            })
        }, 500);
    }

}]);