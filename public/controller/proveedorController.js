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
        name: ""
    };
    var ObjsMaquinaria = {
        marca: "",
        type: "",
        modelo: "",
        capacidada: "",
        precio: "",
        garantia: ""
    };
    var ObjsInsumo = {
        marca: "",
        name: "",
        precio: ""
    }
    var project = [];
    $scope.project = project;
    $scope.typeProveedor = getTypeProveedor.proveedor();
    $scope.ProveedorInfo = "";
    $scope.rubro = getRubroInfo.catRubro();
    $scope.filterInfo = {};
    $scope.showProduct = false;
    $scope.showInsumo = false;
    $scope.showMaquinaria = false;
    $scope.showService = false;
    $scope.showInfo = false;
    $scope.cantidad = 0;
    $scope.unidad = "";
    $scope.age = "";
    $scope.suggestedPrice = 0;
    $scope.ha = "Hectaria";
    $scope.u = "UMA",
        $scope.p = true;
    $scope.s = false;
    $scope.c = false;
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
    $scope.addProveedor = function () {
        if (ObjsProduct.project != "") {
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
        } else {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error('Favor debe llenar los campos del Formulario');
            return false
        }


    }

    /***********************************************************/
    //                  GET PROVEEDOR INFO                      //
    /**********************************************************/
    $scope.getProveedorInfo = function (project, documentID, memberNum) {
        var obj = {}

        if (project == undefined && memberNum == undefined && documentID == undefined) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error('Error debe escoger un filtro para la busqueda');
            return false
        } else {
            if (project != undefined) {
                obj = { project: project }
            }
            if (memberNum != undefined) {
                obj = { memberNum: memberNum }
            }
            if (documentID != undefined) {
                obj = { documentID: documentID }
            }
            //var obj = { project: project,documentID:documentID,memberNum:memberNum}
            obj = JSON.stringify(obj)
            console.log(obj)
            $.ajax({
                url: getProveedor,
                headers: headerAjax,
                method: 'POST',
                dataType: "json",
                data: obj,
                success: function (data) {
                    $scope.filterInfo = data.data;
                    console.log($scope.filterInfo)
                    $scope.showInfo = true;
                    $scope.$digest();
                }
            });
        }

    }

    /****************************************************** 
      ************ DISABLE FILTER **************************
    ********************************************************/

    $scope.disabledFilter = function (value, type) {
        if (value === "p" && type != null) {
            $scope.s = true;
            $scope.c = true;
        }
        if (value === "s") {
            $scope.p = false;
            $scope.c = true;
        }
        if (value === "c") {
            $scope.p = false;
            $scope.s = true;
        }
    }


    /****************************************************** 
      ************ DISABLE FILTER **************************
    ********************************************************/
    $scope.cleanFilter = function () {
        $scope.s = false;
        $scope.c = false;
        $scope.p = true;
        $scope.s = "";
        $scope.c = ""
        $(".v2").val("")
        $(".v3").val("")
        $('select#idOfSelectElement option:first').prop('selected', true);
        $scope.showInfo = false;
    }

    /****************************************************** 
      ************ PRINT  **************************
    ********************************************************/

    $scope.print = function () {
        // VALIDAR SI LOS COLLAPSE ESTAN ABIERTOS
        if ($('.collapse').hasClass('in')) {

            $('.collapse').slideToggle("slow");
        } else {
            $('.collapse').addClass("in")
        }
        window.print() 
    }
}]);


