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
    var facturas = []
    var currentInvoice = []
    $scope.billete = [];
    $scope.monedas = [];
    $scope.cheque = [];
    $scope.Cashier = cajaModal;
    $scope.cajero = "";
    $scope.date = "";
    $scope.cajaID = "";
    $scope.chequeArray = [];
    $scope.facturaDelDia = facturas;
    $scope.currentInvoice = currentInvoice;
    $scope.total = 0;
    $scope.currentCustomer = ""
    $scope.currentAddress = ""
    $scope.currentPhone = ""
    $scope.currentInvoiceNum = 0
    $scope.currentDateInvoice = 0
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
                if (data.caja[0].endDate == null) {
                    $scope.startCashier = data.caja[0].amountStart;
                    $scope.cajero = data.caja[0].userCode;
                    $scope.date = data.caja[0].startDate;
                    $scope.cajaID = data.caja[0]._id;
                    $scope.$digest();
                }
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
    }


    // SE CREA EL CIERRE DE LA CAJA //
    // ---- MONEDAS OBJ
    //-----------------------------//
    var objs = {}
    $scope.createChequeObj = function (numCheq, nameCheq, total) {
        var isExists = false;

        if (jQuery.isEmptyObject(objs) === true) {
            objs = {
                chequeNum: numCheq,
                banco: nameCheq,
                total: total
            }
            isExists = true;
            $("#numq").prop("disabled", "true")
        } else {
            $.each(objs, function (d, s) {
                if (numCheq === s) {
                    objs.banco = nameCheq
                    objs.total = total.replace("$", "").trim()
                } else {
                    objs = {
                        chequeNum: numCheq,
                        banco: nameCheq,
                        total: total
                    }
                    isExists = true;
                    $("#numq").prop("disabled", "true")
                }
            })
        }
        if (isExists) {
            objC[0].type = "Cheque"
            objC[0].count.push(objs)
        }
    }



    /*******************************************************************************
    //------------------------------  ADD CIERRE DE CAJA ---------------------------
    *******************************************************************************/
    $scope.save = function () {
        var Objectz = {
            id: $("#cajaId").val(),
            objB: objB,
            objC: objC,
            objCo: objCo,
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
                window.location.reload();
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
            total: 0
        }
        $scope.chequeArray.push(ong)
    }

    /********************************************************************************
    //------------------------------  LOAD INVOICE LIST -----------------------------
    *******************************************************************************/
    $scope.loadInvoice = function () {
        $.ajax({
            url: getInvoice,
            headers: headerAjax,
            method: 'GET',
            success: function (data) {
                $scope.facturaDelDia = data.data
                $scope.$digest();
                //console.log($scope.facturaDelDia)
                $('#DTA')
                    .dataTable({
                        oLanguage: {
                            sSearch: 'Global search:',
                            sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>',
                            oPaginate: {
                                sNext: '<i class="arrowicon-r-black"></i>',
                                sPrevious: '<i class="arrowicon-l-black"></i>'
                            }
                        },
                        iDisplayLength: 10,
                        aaSorting: [
                            [0, 'desc']
                        ],
                        aoColumnDefs: [{
                            "aTargets": [0],
                            'bSortable': false
                        }, {
                            "aTargets": [1],
                            'sClass': 'bold',
                        }, {
                            "aTargets": [2],
                            'sClass': 'hidden-phone hidden-tablet'
                        }, {
                            "aTargets": [3],
                        }, {
                            "aTargets": [4],
                        }, {
                            "aTargets": [5],
                            'sClass': 'text-right'
                        }],
                        sDom: "<'row-fluid'<'widget-header'<'span6'l><'span6'f>>>rt<'row-fluid'<'widget-footer'<'span6'><'span6'p>>"

                    });
                $('#DTA_length select').select2({
                    minimumResultsForSearch: 6,
                    width: "off"
                });
            }
        });
    }
    /********************************************************************************
       //------------------------------  PRINT INVOICE ------------------------------
       *******************************************************************************/

    $scope.open = function (id) {
        var odj = {id:id}
        odj = JSON.stringify(odj)
        console.log(odj)
        $.ajax({
            url: getInvoiceById,
            headers: headerAjax,
            method: 'POST',
            dataType: 'json',
            data: odj,
            success: function (data) {
                $scope.currentInvoice = data.data
                $scope.total = $scope.currentInvoice[0].total;
                $scope.currentCustomer = $scope.currentInvoice[0].name
                $scope.currentAddress = $scope.currentInvoice[0].address
                $scope.currentPhone = $scope.currentInvoice[0].phone
                $scope.currentInvoiceNum = $scope.currentInvoice[0].invoiceNum
                var date = new Date($scope.currentInvoice[0].date)
                $scope.currentDateInvoice = dateFormat(date,1)
                console.log($scope.currentInvoice)
                $scope.$digest();
            }
        });

        $("#invoiceCashier").modal('show');
    };
    $scope.print = function () {
        var contents = document.getElementById("invoice").innerHTML;
        var frame1 = document.createElement('iframe');
        frame1.name = "frame3";
       // frame1.style.position = "absolute";
       // frame1.style.top = "-1000000px";
        document.body.appendChild(frame1);
        var frameDoc = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
        frameDoc.document.open();
        frameDoc.document.write('<html><head><link href="css/caja/cajaprint.css" rel="stylesheet" media="print"><style type="text/css" media="print">@page {size: auto;margin: 0;}</style>');
        frameDoc.document.write('</head><body>');
        frameDoc.document.write(contents);
        frameDoc.document.write('</body></html>');
        frameDoc.document.close();
        //console.log(window.frames["frame3"])
        setTimeout(function () {
            window.frames["frame3"].focus();
            window.frames["frame3"].print();
            //document.body.removeChild(frame1);
        }, 500);
        return false;
        //window.print();
    }
    $scope.closeDialog = function () {
        // Easily hides most recent dialog shown...
        // no specific instance reference is needed.
        $mdDialog.hide();
    };

}]).directive('format', ['$filter', function ($filter) {
    return {
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
            if (!ctrl) return;

            ctrl.$formatters.unshift(function (a) {
                return $filter(attrs.format)(ctrl.$modelValue)
            });

            elem.bind('blur', function (event) {
                var plainNumber = elem.val().replace(/[^\d|\-+|\.+]/g, '');
                elem.val($filter(attrs.format)(plainNumber));
            });
        }
    };
}]);