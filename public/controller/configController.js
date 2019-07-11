app.controller('configController', ['$scope', '$http', 'Dataservice', function ($scope, $http, Dataservice) {
    var roleModel = {
        name: '',
        module: []
    }
    var $obj = [];
    var $sub = [];
    var moduleName = "";
    var isExistsAction = false;
    var isExists = false;
    var isExistsSub = false;
    var modules = []
    var id = "";
    var obj = [];
    /*######################################################## */
    //                  GLOBAL VARS ANGULAR JS 
    /*######################################################## */
    $scope.searchProvince = objProvince;
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
    $scope.provinces = provinces;
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
    //                FUNCTION ADD ROLE
    /*######################################################## */
    $scope.add = function () {
        obj = JSON.stringify($scope.roleModel)
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
            alertify.set('notifier', 'position', 'top-right');
            alertify.success('Se  guardo el Role correctamente');
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
                    action: [{
                        name: elem.name
                    }]
                }
                var actionINS = false
                $.each(roleModel.module[0].action, function (v, k) {
                    if (k.name === elem.name) {
                        actionINS = true;
                        return false;
                    }
                })
                if (actionINS === false) {
                    roleModel.module[0].action.push($obj)
                }
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
                    $.each(roleModel.module[0].sub, function (v, k) {
                        if (k.name === elem.dataset.parent) {
                            roleModel.module[0].sub[v].action.push($obj)
                        }
                    })
                }
                $obj = {}
                $sub = {}
                isExistsSub = false;
            }
        }
        if (elem.id === "formA05") {
            roleModel.name = elem.value
        }
        console.log($scope.roleModel)
    }

    /*######################################################## */
    //                      DELETE ROLE
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


    /*###################################################### */
    //        PROVINCE,DISTRITO AND CORREGIMIENTO  
    /*###################################################### */
    $scope.province = function () {
        funcInitializeObjDistrito();
        var province = document.getElementById('selectProvince').value;
        $scope.provincespanama = province;
        /*=====================================================
            buscando el distrito de la provincia  selecionada 
          =====================================================*/
        for (const key in $scope.searchProvince.provincia) {
            if ($scope.searchProvince.provincia[key].name === province.toUpperCase()) {
                var district = $scope.searchProvince.provincia[key];
                for (const key in district.distritos) {
                    $scope.setDistrict.Panama.push({
                        id: district.distritos[key].id,
                        name: district.distritos[key].name
                    });
                }
            }
        }
    }

    $scope.distric = function () {
        funcInitializeObjCorregimiento();
        /*=====================================================
          buscando el corregimiento de la provincia  selecionada 
          =====================================================*/
        var distritros = document.getElementById('selectdistrict').value;
        for (const key in $scope.searchProvince.provincia) {
            if ($scope.searchProvince.provincia[key].name === $scope.provincespanama.toUpperCase()) {
                var district = $scope.searchProvince.provincia[key].distritos;
                for (const i in district) {
                    if (district[i].name === distritros) {
                        for (const b in district[i].corregimientos) {
                            $scope.corregimiento.Panama.push({
                                id: district[i].corregimientos[b].id,
                                name: district[i].corregimientos[b].name
                            })
                        }
                        console.log($scope.corregimiento)
                    }
                }
            }
        }
    }

    $scope.saveContact = function () {
        form = $("#contactForm").serializeArray();
        obj = new Object();
        for (const i in form) {
            obj[form[i].name] = form[i].value;
        }
        sendDataContact(obj)
    }

    function sendDataContact(obj) {
        $.ajax({
            type: "POST",
            url: '/add-contact',
            timeout: 2000,
            data: obj,
            success: function (data) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.success('El contacto fue   guardada correctamente');
            },
            error: function (textStatus, err) {
                console.log(textStatus + "" + err);
            }
        });
    }

    function funcInitializeObjDistrito() {
        $scope.setDistrict = {
            Panama: [{
                id: 'district',
                name: 'Selecione un Distrito'
            }, ],
            selectedOption: {
                id: 'district',
                name: 'Selecione un Distrito'
            }
        }
    }

    function funcInitializeObjCorregimiento() {
        $scope.corregimiento = {
            Panama: [{
                id: '00',
                name: 'Selecione un corregimiento'
            }, ],
            selectedOption: {
                id: '00',
                name: 'Selecione un corregimiento'
            }
        }
    }

    // llamadas de las funcione principales 
    loadModules()
    getRole()
    funcInitializeObjDistrito()
    funcInitializeObjCorregimiento()
}]);