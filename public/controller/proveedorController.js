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
        price: "",
        contacPerson: ""
    }]
    var ObjsProduct = {
        project: "",
        rubro: "",
        ha: "",
        uma: "",
        product: "",
        startDate: "",
        endDate: ""
    };
    var ObjsService = {
        name:""
    };
    var ObjsMaquinaria = {
        marca:"",
        type:"",
        modelo:"",
        capacidada:"",
        precio:"",
        garantia:""
    };
    var ObjsInsumo = {
        marca:"",
        name:"",
        precio:""
    }
    var project = [];
    $scope.project = project;
    $scope.typeProveedor = getTypeProveedor.proveedor();
    $scope.rubro = getRubroInfo.catRubro();
    $scope.showProduct = false;
    $scope.showInsumo = false;
    $scope.showMaquinaria = false;
    $scope.showService = false;
    $scope.cantidad = 0;
    $scope.unidad = "";
    $scope.age = "";
    $scope.suggestedPrice = 0;
    $scope.ha = "Hectaria";
    $scope.u = "UMA"
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
    var qqXha = 0
    $scope.createProveedorObj = function (type, data) {

        //NAME AND PREFIX
        if (type == 'nm') {
            provedorModel[0].name = data
            provedorModel[0].prefix = $("#wzNewPrefixProveedor").val()
        }
        if (type == "pj") {
            ObjsProduct.project = data
            ///provedorModel[0].content.push(ObjsProduct)
        }
        if (type == "pjR") {
            ObjsProduct.rubro = data
            if (data != "Pollo de Engorde" || data != "Gallina Ponedora") {
                $scope.unidad = "quintal"
                $.each($scope.rubro, function (v, s) {
                    if (s.name == data) {
                        $scope.suggestedPrice = s.precio;
                        qqXha = s.ha;
                        $scope.changeHeact = "";
                        $scope.changeUMA = "";
                        $scope.cantidad = 0;
                        provedorModel[0].price = $scope.suggestedPrice;
                    }
                })
            } else {
                $scope.unidad = "unidad"
            }
        }
        if (type == "pjH") {
            ObjsProduct.ha = data
            $scope.cantidad = (data * qqXha)
            ObjsProduct.product = $scope.cantidad
        }
        if (type == "pjU") {
            ObjsProduct.uma = data

        }
        if (type == "pSD") {
            ObjsProduct.startDate = data
        }
        if (type == "pED") {
            ObjsProduct.endDate = data
        }
        if (type == "cd") {
            provedorModel[0].documentID = data

        }
        if (type == "cP") {
            provedorModel[0].contacPerson = data
        }

        if (type == "fa") {
            provedorModel[0].address = data
        }
        if (type == "ph") {
            provedorModel[0].phone = data
        }
        if (type == "mV") {
            provedorModel[0].movile = data
        }
        console.log(provedorModel)
        console.log(ObjsProduct)
    }
$scope.addProveedor = function(){
    provedorModel[0].content = ObjsProduct
    var obj = JSON.stringify(provedorModel[0]);
    $.ajax({
        url: addProveedor,
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