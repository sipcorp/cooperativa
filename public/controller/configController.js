app.controller('configController', ['$scope', '$http', 'Dataservice', function ($scope, $http, Dataservice) {
    /*######################################################## */
    //                  GLOBAL VARS ANGULAR JS 
    /*######################################################## */
    $scope.empty = false;
    $scope.showDetails = false;
    $scope.showError = false;
    $scope.showAdd = false;
    $scope.NewUser = false;
    $scope.modules = modules;
    $scope.roleModel = roleModel;
    $scope.subChange = false;
    $scope.parentChange = false;
    $scope.newRole = true;
    $scope.showRoles = true;
    $scope.error = '';

    /*######################################################## */
    //                FUNCTION DIV HIDE AND SHOW 
    /*######################################################## */
    $scope.ShowAdd = function () {
        $scope.showAdd = true;
        $scope.newRole = false;
        loadModules();
    }
    /*######################################################## */
    //       CARGA LOS MODULOS Y SUBMODULOS
    /*######################################################## */
    function loadModules() {
        $http(settings).then(function mySuccess(response) {
            $scope.modules = response.data.data;
        }, function myError(response) {
            $scope.modules = [];
        });
    }

    /*######################################################## */
    //                FUNCTION ADD MODULES
    /*######################################################## */
    $scope.add = function () {
        obj = JSON.stringify($scope.roleModel)
        console.log(obj)
        if (JSON.parse(obj).name == "" && $scope.roleModel === JSON.parse(obj).name) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error('El formulario Esta Vacio');
        } else {
            obj = JSON.stringify($scope.roleModel)
            $.ajax({
                url: UrlAddRole,
                headers: headerAjax,
                method: 'POST',
                dataType: 'json',
                data: obj,
                success: function (data) {
                    saveSuccess(data);
                }
            });
        }
    }

    function saveSuccess(data) {
        var code = data.message.code;
        if (code === 11000) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error('El role ya existe..');
        } else {
            $scope.newRole = true;
            $scope.roles.push(data.save);
            $scope.$digest();
            clearObj();
        }
    }

    function clearObj() {
        document.getElementById("formA05").value = " ";
        $scope.modules = [];
        $scope.$digest();
    }
    /*######################################################## */
    //                FUNCTION CHECK
    /*######################################################## */
    $scope.check = function (event) {
        var elem = event.currentTarget
        var isActive = elem.className.indexOf("active") > 0 ? false : true
        if (isActive && elem.id != "formA05") {
            var parent = elem.dataset.parent;
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
                    $obj = {
                        name: elem.name
                    }
                    $.each(roleModel.module[0].action, function (v, k) {
                        if (k.name === elem.name) {
                            actionIN = true
                        }
                    })
                    if (actionIN === false) {
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
                            action: [{
                                name: elem.name
                            }]
                        }]
                    }
                    roleModel.module.push($obj)
                    $obj = {}
                } else {
                    $obj = {
                        name: elem.name
                    };
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
                        $obj = {
                            name: elem.name
                        };
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
    }

    /*######################################################## */
    //                           DELETE ROLE
    /*######################################################## */
    $scope.modalVerify = function (id, name) {
        $('#ModalDelete').modal('show')
        $scope.id = id;
        $scope.nameModule = name;
        id = $scope.id
    }

    $scope.deleteRole = function (id) {
        $.ajax({
            type: "POST",
            url: UrlDeleteRole,
            timeout: 2000,
            data: {
                id: id
            },
            success: function (data) {
                deleteObjectRole(data)
            },
            error: function (textStatus, err) {
                alert("text status " + textStatus + ", err " + err);
            }
        });
    }

    function deleteObjectRole(data) {
        $('#ModalDelete').modal('hide');
        alertify.set('notifier', 'position', 'top-right');
        alertify.success('Se elimino : el Role correctamente');
        getRole();
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
    loadModules()
    getRole()
}]);