'use strict';
app.controller('proyectController', ['$scope', '$timeout', '$http', function ($scope, $timeout, $http) {

    var poryectModel = [
        {
            name: '',
            iniDate: '',
            endDate: '',
            categoria: '',
            benificiarios: '',
            beneficio: '',
            rubros: [],
            bitacoraModel: []
        }
    ]
    var bitacora = []
    $scope.bitacoraModels = bitacora;
    $scope.proyect = poryectModel;
    $scope.RubroList = getRubroInfo.catRubro();
    $scope.showDetailsCat = false;

    // Funciones

    /**************************************************************************/
    /**************************************************************************/
    // FUNCIONES CICLO //

    // ADD
    $scope.addCiclo = function (hash) {
        angular.forEach($scope.bitacoraModels, function (v, k) {
            if (hash === v.hash) {
                angular.toJson($scope.bitacoraModels[k].task.push({
                    hash: Math.random().toString(36).substr(2),
                    name: '',
                    startDate: '',
                    endDate: '',
                    step: [
                        {
                            hash: Math.random().toString(36).substr(2),
                            name: '',
                            startDate: '',
                            endDate: '',
                            comments: []
                        }
                    ]
                }))
            }
        })

       // console.log($scope.cicloList)
    }
    // DEL
    $scope.delCiclo = function (parent, target) {
        angular.forEach($scope.bitacoraModels, function (v, k) {
            if (v.hash == parent) {
                angular.forEach($scope.bitacoraModels[k].task, function (g, l) {
                    if (g.hash === target) {
                        $scope.bitacoraModels[k].task.splice(l, 1);
                    }
                })
            }
        });
       // console.log($scope.bitacoraModels)
    }

    /**************************************************************************/
    /**************************************************************************/
    // FUNCION STEP //
    //ADD
    $scope.addStep = function (parent, target) {
        angular.forEach($scope.bitacoraModels, function (v, k) {
            if (v.$$hashKey == parent) {
                angular.forEach($scope.bitacoraModels[k].task, function (g, l) {
                    if (g.hash === target) {
                        $scope.bitacoraModels[k].task[l].step.push({
                            hash: Math.random().toString(36).substr(2),
                            name: '',
                            startDate: '',
                            endDate: '',
                            comments: []
                        })
                    }
                })
            }
        })
    }
    // DEL
    $scope.delStep = function (parent, task, step) {
        angular.forEach($scope.bitacoraModels, function (v, k) {
            if (v.$$hashKey == parent) {
                angular.forEach($scope.bitacoraModels[k].task, function (g, l) {
                    if (g.hash === task) {
                        angular.forEach($scope.bitacoraModels[k].task[l].step, function (m, d) {
                            if (m.hash === step) {
                                $scope.bitacoraModels[k].task[l].step.splice(d, 1);
                            }
                        })
                    }
                })

            }
        });
        console.log($scope.cicloList[parent].step)
    }
    /**************************************************************************/
    /**************************************************************************/

    // FUINCION UPDATE MODEL
    $scope.updateModel = function (step, target, type, hash, phash, shash) {
        if (target === '') {
            return false;
        }
        //STEP 
        if (step === 1) {
            if (type === 'n') {
                $scope.proyect[0].name = target
            }
            if (type === 'ns') {
                $scope.proyect[0].iniDate = dateFormat(target,2)
            }
            if (type === 'ne') {

                $scope.proyect[0].endDate = dateFormat(target,2)
            }
        }

        //STEP 2
        if (step === 2) {
            $timeout(function () {
                if (type === 'cat') {
                    if( target.innerText.trim() === "Administración Complementaria"){
                        $scope.showDetailsCat = true
                    }else{
                        $scope.showDetailsCat = false
                    }
                    $scope.proyect[0].categoria = target.innerText.trim()
                }
                if (type === 'can') {
                    $scope.proyect[0].benificiarios = target
                }
                if (type === 'ben') {
                    $scope.proyect[0].beneficio = target
                }
                if (type === 'rubro') {
                    let array = target,
                        arrayLength = target.length,
                        obj2 = {},
                        obj = {};
                        
                    if (arrayLength >= 1) {
                        $.each(array, function (s, k) {
                            var isExists = false;
                            obj2 = { name: k }
                            obj = {
                                name: k,
                                task: [
                                    {
                                        hash: Math.random().toString(36).substr(2),
                                        name: '',
                                        startDate: '',
                                        endDate: '',
                                        step: [
                                            {
                                                hash: Math.random().toString(36).substr(2),
                                                name: '',
                                                startDate: '',
                                                endDate: '',
                                                comments: []
                                            }
                                        ]
                                    }
                                ]
                            }
                            if($scope.proyect[0].rubros.length >= 1){
                               $.each($scope.proyect[0].rubros, function (s, d) {
                                if (k === d.name) {
                                    isExists = true
                                    return false;
                                }
                            }) 
                            }
                            if(!isExists){
                                $scope.proyect[0].rubros.push(obj2) 
                                $scope.bitacoraModels.push(obj)
                            }
                           
                        })
                    }


                    //console.log($scope.bitacoModels)
                    //console.log($scope.proyect)
                }
            }, 600)


        }
        //STEP 3
        if (step === 3) {
            angular.forEach($scope.bitacoraModels, function (v, k) {
                if (v.$$hashKey === phash) {
                    angular.forEach($scope.bitacoraModels[k].task, function (g, l) {
                        if (g.hash === hash) {
                            if (type === 'task') { $scope.bitacoraModels[k].task[l].name = target }
                            if (type === 'tsd') { $scope.bitacoraModels[k].task[l].startDate = dateFormat(target,2) }
                            if (type === 'ted') { $scope.bitacoraModels[k].task[l].endDate = dateFormat(target,2) }

                            //STEP
                            if (type === 'step') {
                                angular.forEach($scope.bitacoraModels[k].task[l].step, function (m, s) {
                                    if (m.hash === shash) {
                                        $scope.bitacoraModels[k].task[l].step[s].name = target
                                    }
                                })
                            }
                            if (type === 'ss') {
                                angular.forEach($scope.bitacoraModels[k].task[l].step, function (m, s) {
                                    if (m.hash === shash) {
                                        $scope.bitacoraModels[k].task[l].step[s].startDate = dateFormat(target,2)
                                    }
                                })
                            }
                            if (type === 'se') {
                                angular.forEach($scope.bitacoraModels[k].task[l].step, function (m, s) {
                                    if (m.hash === shash) {
                                        $scope.bitacoraModels[k].task[l].step[s].endDate = dateFormat(target,2)
                                    }
                                })
                            }
                        }
                    })

                }
                //console.log($scope.bitacoraModels)
            })
        }
        //console.log($scope.proyect)
    }
    /**************************************************************************/
    /**************************************************************************/

    // CREATE PROYECT

    $scope.addProject = function () {
        var objProject = angular.toJson($scope.bitacoraModels)
        objProject = JSON.parse(objProject)
        $scope.proyect[0].bitacoraModel.push(objProject)
     
        var obj = JSON.stringify($scope.proyect)
        $.ajax({
            url: addProject,
            headers: headerAjax,
            method: 'POST',
            dataType: 'json',
            data: obj,
            success: function (data) {
                window.location.reload();
                console.log(data)
            }
        });
    }
}]);