app.controller('cajaController', ['$scope', '$timeout', "$http", function ($scope, $timeout, $http) {
    var cajaModal = {
        startAmount: '',
        cajero: '',
        startDate: '',
        endDate: '',
        faltante: '',
        sobrante: '',
        cashierCount: []
    }
    var objB = [{
        type: '',
        count: []
    }]
    var objCo = [{
        type: '',
        count: []
    }]
    var objC = [{
        type: '',
        count: []
    }]
    $scope.billete = [];
    $scope.monedas = [];
    $scope.cheque = [];
    $scope.Cashier = cajaModal;
    $scope.cajero = "";
    $scope.date = "";
    $scope.cajaID =""
    $scope.chequeArray = [

    ]
    /********************************************************************************
    //------------------------------  GET  CAJA INICIAL ----------------------------
    *******************************************************************************/
    $scope.startCashier = 0;
    $scope.getStartCashier = function () {
        $.ajax({
            url: getCaja,
            headers: headerAjax,
            method: 'GET',
            success: function (data) {
                $scope.startCashier = data.caja[0].amountStart;
                $scope.cajero = data.caja[0].userCode;
                $scope.date = data.caja[0].startDate;
                $scope.cajaID = data.caja[0]._id;
                $scope.$digest();
            }
        });
    }
    $scope.getStartCashier()

    /********************************************************************************
     //------------------------------  ADD CAJA ------------------------------------
     *******************************************************************************/
    var obj = {}
    $scope.createCashier = function (denomination, value, type) {
            var object = {},
            currentUser = $("#user").val();

        // SE CREA LA CAJA INCIAL DEL DIA SI NO EXISTE    
        if (type === "st") {
            cajaModal.startAmount = value;
            cajaModal.cajero = currentUser;
            cajaModal.startDate = currentDate(2, 1)

            object = JSON.stringify($scope.Cashier)
            if (JSON.parse(object).startAmount == "" || JSON.parse(object).startAmount == 0) {
                alertify.set('notifier', 'position', 'top-right');
                alertify.error('Debe existir una valor mayor a 0');
                return false
            } else {
                $.ajax({
                    url: addCaja,
                    headers: headerAjax,
                    method: 'POST',
                    dataType: 'json',
                    data: object,
                    success: function (data) {
                        $scope.startCashier = value
                        console.log(data)
                        $scope.getStartCashier()
                    }
                });

                $("#openCashier").modal("hide")
            }
        }

        // SE CREA EL CIERRE DE LA CAJA //
        //-----------------------------//

        // ---- BILLETES OBJ
        if (type === "dtB") {
            var isExists = false;

            object = {
                denomination: denomination,
                qty: value,
                total: (value * denomination)
            }

            $.each(objB[0].count, function (v, k) {
                if (denomination === k.denomination) {
                    objB[0].count[v].qty = value;
                    objB[0].count[v].total = (value * denomination);
                    isExists = true;
                    return false;
                }
            })

            if (!isExists) {
                objB[0].type = "Billete"
                objB[0].count.push(object)
            }

            if (objB[0].count.length === 6) {
                cajaModal.cashierCount.push(objB)
            }
            object = {}
        }

        // ---- MONEDAS OBJ
        if (type === "dtCo") {
            var isExists = false;
            object = {
                denomination: denomination,
                qty: value,
                total: (value * denomination)
            }

            $.each(objCo[0].count, function (v, k) {
                if (denomination === k.denomination) {
                    objCo[0].count[v].qty = value;
                    objCo[0].count[v].total = (value * denomination);
                    isExists = true;
                    return false;
                }
            })

            if (!isExists) {
                objCo[0].type = "Monedas"
                objCo[0].count.push(object)
            }

            if (objCo[0].count.length === 6) {
                cajaModal.cashierCount.push(objCo)
            }
            object = {}
        }

        // ---- CHEQUE OBJ
        if (type === "dtC") {
            if (jQuery.isEmptyObject(obj) === true) {
                if (denomination === "numCheq") {
                    obj = {
                        chequeNum: value,
                        banco: "",
                        total: ""
                    }
                }
                if (denomination === "nameCheq") {
                    obj = {
                        chequeNum: "",
                        banco: value,
                        total: ""
                    }
                }
                if (denomination === "total") {
                    obj = {
                        chequeNum: "",
                        banco: "",
                        total: value
                    }
                }
            }else{
                if (denomination === "numCheq") {
                    obj.chequeNum = value
                }
                if (denomination === "nameCheq") {
                    obj.banco = value 
                }
                if (denomination === "totalCheq") {
                    obj.total = value
                }
            }

        }
        console.log(obj)
    }

    /*******************************************************************************
    //------------------------------  ADD CIERRE DE CAJA ---------------------------
    *******************************************************************************/
    $scope.save = function(){
        var Objectz ={
            id:$("#cajaId").val(),
            faltante:"",
            sobrante:"",
            objB:objB,
            objC:obj,
            objCo:objCo,
            endDate: new Date()
        }
        var object = JSON.stringify(Objectz)
        $.ajax({
            url: updateCaja,
            headers: headerAjax,
            method: 'POST',
            dataType: 'json',
            data: object,
            success: function (data) {
                console.log(data)
            }
        });
    }

    /********************************************************************************
    //------------------------------  ADD CHEQUE RPW -------------------------------
    *******************************************************************************/
    $scope.addRow = function () {
        var ong = {
            cheque: "",
            banco: "",
            total: ""
        }
        $scope.chequeArray.push(ong)
    }
    console.log($scope.Cashier)
}]);