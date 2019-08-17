'use strict';
app.controller('invoiceController', ['$scope', '$timeout', function ($scope, $timeout) {
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
    var tmpInvoice = [
    ]
    console.log(tmpInvoice)
    var productList = [
        {
            name: 'Pollo',
            price: 2.1,
            unit: 'Lb',
            description: 'Pollo tipo panama'
        },
        {
            name: 'Arroz',
            price: 3.5,
            unit: 'Lb',
            description: 'Arroz pilado de primera'
        },
        {
            name: 'Guandu',
            price: 1.5,
            unit: 'Lb',
            description: 'Guandu grano verde'
        },
        {
            name: 'Guandu Oscuro',
            price: 1.5,
            unit: 'Lb',
            description: 'Guandu grano oscuro'
        }
    ]

    // variables globales
    //$scope.company = companyInfo;
    $scope.add = rowProduct;
    $scope.product = productList;
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
    $scope.customer = customerInfo;
    $scope.customerAddress = '';
    $scope.customerPhone = '';
    $scope.customerName = '';
    $scope.qtyInit = 0

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
                angular.forEach(productList, function (value, key) {
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
                $scope.customerAddress = value.address;
                $scope.customerPhone = value.phone;
                $scope.customerName = value.name;
                return false;
            }
        });
        console.log($scope.tmpInvoice)
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
    $scope.qtyChange = function (data, qty) {
        angular.forEach($scope.add, function (value, key) {
            if (data === key) {
                if (qty <= 0) {
                    qty = 1
                }
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

        })
        $scope.add.push($scope.tmpCart);
        $scope.tmpCart = {};
        $scope.getTotal();
    }

    //Create a invoice 
    $scope.createInvoice = function () {
        if ($scope.customerName === '') {
            $scope.errorMessage = 'Seleccione un cliente'
            $scope.typeMessage = 1
            $timeout(function () {
                $scope.errorMessage = ''
                $scope.typeMessage = 0
            }, 1500)
            return false
        }
        if ($scope.typeMessage === 0) {
            if ($scope.add.length <= 0) {
                $scope.errorMessage = 'Debe agregar un producto'
                $scope.typeMessage = 3
                $timeout(function () {
                    $scope.errorMessage = ''
                    $scope.typeMessage = 0
                }, 1500)
                return false
            }
        } else {
            $scope.tmpInvoice.push({
                name: $scope.customerName,
                address: $scope.customerAddress,
                phone: $scope.customerPhone,
                invoiceNum: $scope.invoiceNum,
                date: $scope.date,
                items: $scope.add
            });
        }

        console.log($scope.tmpInvoice)
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