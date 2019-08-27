'use strict';
app.controller('invoiceController', ['$scope', '$timeout', "$http", function ($scope, $timeout, $http) {
    var companyInfo = [
        {
            name: 'Cooperativa de Servicios Multiples La Alanjeña',
            address: 'Alenje calle 12',
            ruc: '251-981-69542',
            dv: '52',
            phone: '+507 752-9899'
        }
    ]
    var customerInfo = []
    var rowProduct = []
    var tmpCart = [];
    var tmpInvoice = []
    //console.log(tmpInvoice)
    var objsCustomer = {
        name: "",
        documentID: "",
        direccion: "",
        movile: "",
        phone: "",
        observacion: ""

    }
   
   // variables globales
    //$scope.company = companyInfo;
    $scope.add = rowProduct;
    $scope.product = [];
    $scope.tmpCart = tmpCart;
    $scope.tmpInvoice = tmpInvoice;
    $scope.due = 0;
    $scope.subtotal = 0;
    $scope.total = 0;
    $scope.paid = 0;
    $scope.errorMessage = '';
    $scope.typeMessage = 0;
    $scope.date = new Date();
    $scope.invoiceNum = rand_code(1, 5, '');
    $scope.customer = [];
    $scope.customerAddress = '';
    $scope.customerPhone = '';
    $scope.customerName = '';
    $scope.qtyInit = 0

    // VALIDAR QUE EXISTA CAJA DEL DIA ABIERTA
    $scope.getStartCashier = function () {
        $.ajax({
            url: getCaja,
            headers: headerAjax,
            method: 'GET',
            success: function (data) {
                if(jQuery.isEmptyObject(data.caja) === true){
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('No existe caja abierta para este dia');  
                }
            }
        });
    }
    
    // Load Product List
    $http(getProducto).then(function mySuccess(response) {
        $scope.product = response.data.producto
        // $scope.$digest();
        //console.log($scope.product)
    }, function myError(response) {
        $scope.product = [];
    });

    // Load Cliente List
    getCustomer()
    $scope.getStartCashier()
    // Add item to invoice
    $scope.addItem = function (data) {
        if (data) {
            var exists = false
            angular.forEach($scope.add, function (value, key) {
                if (data === value.name) {
                    $scope.tmpCart = {
                        name: value.name,
                        description: value.description,
                        cost: value.price,
                        qty: (value.qty + 1),
                        price: (value.price * 1)
                    };
                    exists = true;
                    $scope.add.splice(key, 1);
                }

            })
            if (exists === false) {
                angular.forEach($scope.product, function (value, key) {
                    if (data === value.name) {
                        $scope.tmpCart = {
                            name: value.name,
                            description: value.description,
                            cost: value.price,
                            qty: 1,
                            price: (value.price * 1)

                        };
                    }
                })
            }

            $scope.add.push($scope.tmpCart);
            $scope.tmpCart = {};
            $scope.getTotal();
        } else {
            $scope.errorMessage = 'Debe agregar un producto'
            $scope.typeMessage = 3
            $timeout(function () {
                $scope.errorMessage = ''
                $scope.typeMessage = 0
            }, 1500)
            return false
        }
    };

    // delete item
    $scope.deleteitem = function (index) {
        $scope.add.splice(index, 1);
        $scope.getTotal()
    }

    // info customer
    $scope.infoCustomer = function (index) {
        var i = index
        angular.forEach($scope.customer, function (value, key) {
            if (i === value.name) {
                $scope.customerAddress = value.direccion;
                $scope.customerPhone = (value.phone == "" ? value.movile : value.phone);
                $scope.customerName = value.name;
                return false;
            }
        });
        console.log($scope.tmpInvoice)
    }

    // Add Customer 
    $scope.addCustomer = function () {
        var isEmpty = false
        if (objsCustomer.name == "") {
            isEmpty = true
        }
        if (objsCustomer.documentID == "") {
            isEmpty = true
        }
        if (objsCustomer.direccion == "") {
            isEmpty = true
        }
        if (isEmpty) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.error('Favor verificar que los campos no esten vacios');

        } else {
            $("body").addClass("sidebar-hidden")
            $("#custmerName").val("")
            $("#cedula").val("")
            $("#address").val("")
            $("#movile").val("")
            $("#phone").val("")
            $("#obser").val("")
            objsCustomer = JSON.stringify(objsCustomer);
            $.ajax({
                url: addCliente,
                headers: headerAjax,
                method: 'POST',
                dataType: 'json',
                data: objsCustomer,
                success: function (data) {
                    // Create Objs Customer
                    var objsCustomer = {
                        name: "",
                        documentID: "",
                        direccion: "",
                        movile: "",
                        phone: "",
                        observacion: ""

                    }
                    getCustomer();

                    //10 seconds delay
                    $timeout(function () {
                        $("select#clientes").selectpicker('refresh')
                    }, 2500);


                    console.log(data)
                }
            });
        }


    }

    // Get Customer List
    function getCustomer() {
        $.ajax({
            url: getCliente,
            headers: headerAjax,
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                $scope.customer = data.cliente
                $scope.$apply();
                console.log($scope.customer)
            }
        });
    }

    // Recalculate Total
    $scope.getTotal = function () {
        var total = 0;
        for (var i = 0; i < $scope.add.length; i++) {
            var line = $scope.add[i];
            total += (line.cost * line.qty);
        }
        $scope.total = total;
        return total;
    };

    // if qty Change Recalculate total
    $scope.qtyChange = function (data, qty, name) {
        var isAlert = false;
        var isEmpty = false;
        var stcok = 0
        $.each($scope.product, function (v, k) {
            if (name == k.name) {
                if (parseInt(qty) > k.stock) {
                    isAlert = true
                    stcok = k.stock
                }
                if (k.stock == 0) {
                    isEmpty = true
                }
            }
        })
        angular.forEach($scope.add, function (value, key) {
            if (data === key) {
                if (qty <= 0) {
                    qty = 1
                }
                if (isAlert) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Lo sentimos, la existencia es de ' + stcok);
                    qty = stcok
                }
                if (isEmpty) {
                    alertify.set('notifier', 'position', 'top-right');
                    alertify.error('Sin Existencia');
                    return false;
                } else {
                    $scope.tmpCart = {
                        name: value.name,
                        description: value.description,
                        cost: value.price,
                        qty: qty,
                        price: (value.price * qty)

                    };
                    //exists = true;
                    $scope.add.splice(key, 1);
                }
            }

        })
        $scope.add.push($scope.tmpCart);
        $scope.tmpCart = {};
        $scope.getTotal();

    }

    //Create a invoice 
    $scope.createInvoice = function () {
        var qtyUpdate = 0
        if ($scope.customerName === '') {
            $scope.errorMessage = 'Seleccione un cliente'
            $scope.typeMessage = 1
            $timeout(function () {
                $scope.errorMessage = ''
                $scope.typeMessage = 0
            }, 1500)
            return false
        }

        if ($scope.add.length <= 0) {
            $scope.errorMessage = 'Debe agregar un producto'
            $scope.typeMessage = 3
            $timeout(function () {
                $scope.errorMessage = ''
                $scope.typeMessage = 0
            }, 1500)
            return false

        } else {
            $scope.tmpInvoice.push({
                name: $scope.customerName,
                address: $scope.customerAddress,
                phone: $scope.customerPhone,
                invoiceNum: $scope.invoiceNum,
                date: $scope.date,
                items: JSON.parse(angular.toJson($scope.add)),
                total:$scope.total
            });

            console.log($scope.tmpInvoice)

            // STEP 1 DEDUCIR DEL INVENTARIO
            $.each($scope.product, function (v, k) {
                var name = k.name;
                var stock = k.stock
                var newQty = 0
                $.each($scope.add, function (d, s) {
                    if (name == s.name) {
                        newQty = stock - s.qty
                    }
                    var objs = {
                        name: name,
                        stock: newQty
                    }
                    objs = JSON.stringify(objs);
                    $.ajax({
                        url: updateStock,
                        headers: headerAjax,
                        method: 'POST',
                        dataType: 'json',
                        data: objs,
                        success: function (data) {
                            console.log(data)

                        }
                    });
                })

            })

            // STEP 2 SE CREA LA FACTURA
            var objsTmp = JSON.stringify($scope.tmpInvoice);
            $.ajax({
                url: addInvoice,
                headers: headerAjax,
                method: 'POST',
                dataType: 'json',
                data: objsTmp,
                success: function (data) {
                    window.location.reload();
                    console.log(data)

                }
            });
        }
    }

    // Create Objs Customer
    $scope.createObjsCustomer = function (type, values) {
        if (type == 'n') {
            objsCustomer.name = values
        }
        if (type == 'c') {
            objsCustomer.documentID = values
        }
        if (type == 'a') {
            objsCustomer.direccion = values
        }
        if (type == 'm') {
            objsCustomer.movile = values
        }
        if (type == 'p') {
            objsCustomer.phone = values
        }
        if (type == 'o') {
            objsCustomer.observacion = values
        }

        console.log(objsCustomer)
    }
    // PRINT INVOICE
    $scope.printToCart = function () {
        var innerContents = document.getElementById('invoicePrint').innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="css/invoice/style.css" /></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    }


}]);