'use strict';
app.controller('productoController', ['$scope', '$http', '$location', function ($scope, $http, $location) {

    var objs = {
        name: "",
        code:"",
        price: "",
        stock: "",
        description: "",
        alert: ""
    }
    $scope.createObj = function (type, value) {
        if (type == "n") {
            objs.name = value;
            objs.code = Math.random().toString(36).substr(2,8);
        }
        if (type == "p") {
            objs.price = value;
        }
        if (type == "s") {
            objs.stock = value;
        }
        if (type == "d") {
            objs.description = value;
        }
        if (type == "a") {
            objs.alert = value;
        }
        console.log(objs);
    }

    $scope.validateAndSave = function () {
        var isEmpty = false
        // VALIDAR OBJETO DEBE VENIR CON TODOS LOS CAMPOS LLENOS
        if (objs.name == "") {
            isEmpty = true;
        }
        if (objs.price == "") {
            isEmpty = true;
        }
        if (objs.stock == "") {
            isEmpty = true;
        }
        if (objs.description == "") {
            isEmpty = true;
        }
        if (objs.alert == "") {
            isEmpty = true;
        }

        if (isEmpty == true) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error('Favor verificar que los campos no esten vacios');
        } else {
            objs = JSON.stringify(objs);
            $.ajax({
                url: addProducto,
                headers: headerAjax,
                method: 'POST',
                dataType: 'json',
                data: objs,
                success: function (data) {
                    window.location.reload();
                    console.log(data)    
                }
            });
        }
    }
}]);