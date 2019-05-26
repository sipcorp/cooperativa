'use strict';
app.controller('cajaController', ['$scope', '$timeout', "$http", 'Dataservice', function ($scope, $timeout, $http, Dataservice) {
var cajaModel =[
    {
        startDate ='',
        cajero = '',
        startAmount = '',
        endDate ='',
        cashCount =[
           dolar=[],
           coins =[],
           bankChecks =[]
        ],
        sobrante='',
        faltante=''
    }
] 
 $scope.startCashier = 0;

}]);