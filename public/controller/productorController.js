'use strict';
app.controller('productorController', ['$scope', '$http', '$timeout', '$compile', function ($scope, $http, $timeout, $compile) {
    var productor = [
        {
            prefix: '',
            name: '',
            project: [{
                name: '',
                hectaria:"",
                rubro: [{
                    name: "",
                    rubroInsumo: []
                }],
                bitacora: []
            }],
            documentID: '',
            gender: '',
            birthdate: '',
            age: '',
            address: ""
        }
    ]
    var insumoDetails = []
    var project = [];
    var rubros = [];
    var bitacora = []
    var cat = "Administración Complementaria";
    $scope.bitacora = bitacora;
    $scope.project = project;
    $scope.rubro = rubros;
    $scope.showRubro = false;
    $scope.rubroBitacora = [];
    $scope.productor = productor;
    /***********************************************************/
    //                  GET PROJECT INFO                      //
    /**********************************************************/
    $scope.getProjectInfo = function () {
        $.ajax({
            url: getProject,
            headers: headerAjax,
            method: 'GET',
            success: function (data) {
                project.push(data.project)
                $scope.$digest();
            }
        });
    }
    $scope.getProjectInfo()

    /***********************************************************/
    //                  CREATE OBJ PRODUCTOR                  //
    /**********************************************************/
    $scope.createObj = function (data, type) {

        // LOAD NAME AND PREFIX
        if (type === 'nm') {

            // LOAD PREFIX
            let prefix = $("#wzNewPrefix").val()
            productor[0].prefix = prefix

            // LOAD NAME
            productor[0].name = data

        }

        // LOAD PROJECT AND RUBRO
        if (type === 'pj') {
            // LOAD PROJECT
            var id = data;
            var name = "";
            var objBit;
            $.each($scope.project, function (d, l) {
                if (id === l[d]._id && l[d].categoria === cat) {
                    name = l[d].name;
                    productor[0].project[0].name = name
                    $scope.rubro.push(l[d].rubros);
                    objBit = angular.toJson(l[d].bitacoraModel[0])
                    objBit = JSON.parse(objBit)
                    bitacora.push(objBit);
                    console.log(bitacora)
                    $scope.showRubro = true
                }
            })

        }

        if (type === 'rb') {
            productor[0].project[0].rubro[0].name = data
            $.each($scope.bitacora, function (s, l) {
                if (data === l[s].name) {
                    $scope.rubroBitacora.push(l[s].task[0])
                    var objBits = angular.toJson($scope.rubroBitacora[0])
                    objBits = JSON.parse(objBits)
                    productor[0].project[0].bitacora.push(objBits)
                }
            })
        }


        // LOAD INSUMOS DETAILS
        if (type === 'ins') {
            productor[0].project[0].rubro[0].rubroInsumo.push(data)
        }

        // LOAD CEDULA
        if (type === 'cd') {
            productor[0].documentID = data
        }

        // LOAD GENDER
        if (type === 'gr') {
            productor[0].gender = data.value
        }

        // LOAD FECHA DE NACIMIENTP
        if (type === 'dob') {
            var d = new Date(data),
                n = new Date(),
                year = n.getFullYear() - d.getFullYear()
            $("#wzNewAge").val(year)
            productor[0].birthdate = dateFormat(d,2);
            productor[0].age = year
        }
        if (type === 'fa') {
            productor[0].address = data
        }
        if(type === 'ha'){
            productor[0].project[0].hectaria = data
        }
        console.log($scope.productor)
    }

    /****************************************************************************************************************/
    // ADD ROW
    $scope.addRow = function (id, name, qty, taskName, stepName) {
        var Objects = {}, index = Math.floor(Math.random() * (15 - 8 + 1) + 8);
        if (qty == undefined) {
            qty = 1
        }
        var $elem = '<tr id="idx' + index + id + '">' +
            '<td>' + name + '</td>' +
            '<td>' + qty + '</td>' +
            '<td><a class="btn btn-xs delete-record"' +
            'ng-click="delRow($event)"><i class="fontello-icon-trash"></i>' +
            '<input type="hidden" redonly value="' + taskName + '">' +
            '<input type="hidden" redonly value="' + stepName + '">' +
            '</a></td>' +
            '</tr>'
        var newRow = $compile($elem)($scope);
        $("tbody[id=" + id + "]").append(newRow)
        $(".insumoName").val("")
        $(".qtyName").val("")

        // Load Insumos Details
        if (insumoDetails.length == 0) {
            Objects = {
                task: taskName,
                step: [{
                    name: stepName,
                    insumos: [{
                        name: name,
                        qty: qty
                    }]
                }]
            }
            insumoDetails.push(Objects)
        } else {
            var taskExist = false,
                stepExists = false,
                insumoExists = false,
                stepIndex,
                taskIndex;
            $.each(insumoDetails, function (s, v) {
                if (v.task === taskName) {
                    taskExist = true;
                    taskIndex = s;
                }
                for (let i = 0; i < insumoDetails[s].step.length; i++) {
                    if (insumoDetails[s].step[i].name == stepName) {
                        stepExists = true;
                        stepIndex = i;
                        return false;
                    }
                }
                if (stepExists == true) {
                    for (let index = 0; index < insumoDetails[s].step[stepIndex].insumos.length; index++) {
                        if (insumoDetails[s].step[stepIndex].insumos[index].name == name) {
                            insumoExists = true;
                        }
                    }
                }

            });

            if (taskExist == false) {
                Objects = {
                    task: taskName,
                    step: [{
                        name: stepName,
                        insumos: [{
                            name: name,
                            qty: qty
                        }]
                    }]
                }
                insumoDetails.push(Objects)
                Objects = {}
            } else {

                // CHECK STEP 
                if (stepExists == false) {
                    Objects = {
                        name: stepName,
                        insumos: [{
                            name: name,
                            qty: qty
                        }]
                    }
                    insumoDetails[taskIndex].step.push(Objects)
                    Objects = {}
                } else {
                    if (insumoExists == false) {
                        Objects = {
                            name: name,
                            qty: qty
                        }
                        insumoDetails[taskIndex].step[stepIndex].insumos.push(Objects)
                        Objects = {}
                    }
                }

            }
        }
        console.log(insumoDetails)
    }
    // DELETE ROW
    $scope.delRow = function (index) {
        var id = index.currentTarget.offsetParent.parentElement.id,
            taskName = index.currentTarget.children[1].value,
            stepName = index.currentTarget.children[2].value,
            insumoName = index.currentTarget.offsetParent.parentElement.children[0].innerText;

        $scope.table = $("tbody[id=" + index.currentTarget.offsetParent.parentElement.parentElement.id.trim() + "]")
        // DELETE ROW 
        $.each($scope.table[0].children, function (v, l) {
            if (l.id === id) {
                l.remove()
                return false;
            }
        })
        // DELETE FIELD IN ARRAY
        $.each(insumoDetails, function (v, l) {
            if (l.task === taskName) {
                if (l.step[v].name == stepName) {
                    if (l.step[v].insumos[v].name == insumoName) {
                        l.step[v].insumos.splice(v, 1)
                        console.log(insumoDetails)
                    }
                }
            }
        })
    }
    /************************************************************************************/
    //                                SAVE PRODUCTOR
    /***********************************************************************************/
    $scope.save = function(){
        productor[0].project[0].rubro[0].rubroInsumo.push(insumoDetails);
        var obj = JSON.stringify(productor[0]);
        $.ajax({
            url: addProductor,
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