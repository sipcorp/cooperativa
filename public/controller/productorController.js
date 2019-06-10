'use strict';
app.controller('productorController', ['$scope', '$http', '$timeout', '$compile', function ($scope, $http, $timeout, $compile) {
    var productor = [
        {
            prefix: '',
            name: '',
            project: [{
                name: '',
                rubro: '',
                bitacora: []
            }],
            documentID: '',
            gender: '',
            birthdate: '',
            age: '',
            address: ""
        }
    ]

    var project = [];
    var rubros = [];
    var bitacora = []
    var cat = "Administración Complementaria";
    $scope.bitacora = bitacora;
    $scope.project = project;
    $scope.rubro = rubros;
    $scope.showRubro = false;
    $scope.rubroBitacora = []
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
                console.log(project)
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
            var id = data
            var name = ""
            $.each($scope.project, function (d, l) {
                if (id === l[d]._id && l[d].categoria === cat) {
                    name = l.name;
                    $scope.rubro.push(l[d].rubros);
                    bitacora.push(l[d].bitacoraModel[0]);
                    console.log(bitacora)
                    $scope.showRubro = true
                }
            })
            productor[0].project[0].name = name
        }
        if (type === 'rb') {
            productor[0].project[0].rubro = data
            $.each($scope.bitacora, function (s, l) {
                if (data === l[s].name) {
                    $scope.rubroBitacora.push(l[s].task[0])
                    console.log($scope.rubroBitacora)
                }
            })
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
            productor[0].birthdate = data
        }

        console.log($scope.productor)
    }
    $scope.addRow = function (id, name, qty) {
        var $elem = '<tr id="idx' + id + '">' +
            '<td>' + name + '</td>' +
            '<td>' + qty + '</td>' +
            '<td><a class="btn btn-xs delete-record"' +
            'ng-click="delRow($event)"><i class="fontello-icon-trash"></i></a></td>' +
            '</tr>'
        var newRow = $compile($elem)($scope);
        $("tbody[id=" + id + "]").append(newRow)
        $("#exampleInputName").val("")
        $("#exampleInputAge").val("")
    }
    $scope.delRow = function (index) {
        var id = index.currentTarget.offsetParent.parentElement.id
        $scope.table = $("tbody[id=" + index.currentTarget.offsetParent.parentElement.id.replace("idx", "").trim() + "]")

        $.each($scope.table[0].children, function (v, l) {
            if (l.id === id) {
                l.remove()
            }
        })
    }
}]);