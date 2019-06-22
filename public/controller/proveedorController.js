'use strict';
app.controller('proveedorController', ['$scope', '$timeout', function ($scope, $timeout) {
    var provedorModel = [{
        type: "",
        prefix: "",
        name: "",
        content: [],
        phone: "",
        movile: "",
        address: "",
        documentID: "",
        ruc: "",
        price: ""
    }]
    var ObjsProduct = {
        project:"",
        rubro:"",
        ha:"",
        uma:"",
        product:""
    };
    var project = [];
    $scope.project = project;
    $scope.typeProveedor = getTypeProveedor.proveedor()
    $scope.showProduct = false;
    $scope.showInsumo = false;
    $scope.showMaquinaria = false;
    $scope.showService = false;


    /***********************************************************/
    //                  GET PROJECT INFO                      //
    /**********************************************************/
    $scope.getInfoProject = function () {
        $.ajax({
            url: getProject,
            headers: headerAjax,
            method: 'GET',
            success: function (data) {
                $.each(data.project, function (s, v) {
                    if (v.categoria != "Administración Complementaria") {
                        project.push(data.project[s])
                        $scope.$digest();
                    }
                })

            }
        });
    }
    $scope.getInfoProject()

    console.log($scope.project)
    //show secction
    $scope.showSecction = function (type) {
        var id = parseInt(type)
        if (id == 1) {
            $scope.showProduct = true;
            $scope.showInsumo = false;
            $scope.showMaquinaria = false;
            $scope.showService = false;
            provedorModel[0].type = "Producto"
        }
        if (id == 2) {
            $scope.showService = true;
            $scope.showProduct = false;
            $scope.showInsumo = false;
            $scope.showMaquinaria = false;
            provedorModel[0].type = "Servicios"
        }
        if (id == 4) {
            $scope.showInsumo = true;
            $scope.showProduct = false;
            $scope.showMaquinaria = false;
            $scope.showService = false;
            provedorModel[0].type = "Insumos"
        }
        if (id == 3) {
            $scope.showMaquinaria = true;
            $scope.showProduct = false;
            $scope.showInsumo = false;
            $scope.showService = false;
            provedorModel[0].type = "Maquinaria"
        }
        console.log(provedorModel)
    }

    // Create Objs
    $scope.createProveedorObj = function (type, data) {

        //NAME AND PREFIX
        if (type == 'nm') {
            provedorModel[0].name = data
            provedorModel[0].prefix = $("#wzNewPrefixProveedor").val()
        }
        if(type == "pj"){
            ObjsProduct.project = data
            provedorModel[0].content.push(ObjsProduct)
        }
        if( type == "pjR"){
            ObjsProduct.rubro = data
        }
        if(type == "pjH"){
            ObjsProduct.ha = data
        }
        if(type == "pjU"){
            ObjsProduct.uma = data
        }
        if(type == "pjP"){
            ObjsProduct.product = data
        }
        console.log(provedorModel)
    }
}]);