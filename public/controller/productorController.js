'use strict';
  app.controller('productorController',['$scope','$http','$timeout', function($scope, $http,$timeout) {
var productor =[
    {
        prefix: '',
        name: '',
        project: [{
            name:'',
            rubro:''
        }],
        documentID:'',
        gender:'',
        birthdate:'',
        age:'',
        address:[] 
   }  
]
var district = [];
var corregimiento = []
var province = getPaisInfo.provincia();
$scope.district = district;
$scope.corregimiento = corregimiento;
$scope.province = province;
$scope.productor = productor;

$scope.myFilter = function(item,type){
    if(type === 'district'){
      $.each($scope.province,function(v,k){
        if(k.name === item){
            $scope.district.push(k.district)
        }
    })  
    }else{
        $.each($scope.district[0],function(v,k){
            if(k.name === item){
                $scope.corregimiento.push(k.corregimientos)
            }
        })   
    }
    
}

$scope.createObj = function(data,type){

    // LOAD NAME AND PREFIX
    if(type === 'nm'){

        // LOAD PREFIX
        let prefix = $("#wzNewPrefix").val()
        productor[0].prefix = prefix

        // LOAD NAME
        productor[0].name = data

    }
    
    // LOAD PROJECT AND RUBRO
    if(type === 'pj'){
        // LOAD PROJECT
        productor[0].project[0].name = data
    }
    if(type === 'rb'){
        productor[0].project[0].rubro = data
    }

    // LOAD CEDULA
    if(type === 'cd'){
        productor[0].documentID = data
    }
    
    // LOAD GENDER
    if(type === 'gr'){
        productor[0].gender = data.value
    }

    // LOAD FECHA DE NACIMIENTP
    if(type === 'dob'){
        productor[0].birthdate = data
    }
    if(type === 'st'){
        $scope.myFilter(data,'district') 
    }
    if(type === 'ds'){
        $scope.myFilter(data,'cr') 
    }
    console.log($scope.productor)
}
console.log($scope.corregimiento)
}]);