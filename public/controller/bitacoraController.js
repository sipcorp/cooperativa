'use strict';
app.controller('bitacoraController', ['$scope','$timeout', function($scope,$timeout) {
var productorList = [
    {
    name:'Luis Alberto Rojas',
    address: 'Alanje entrando por rio grande',
    progress: 78,
    proyect: 'Auto Consumo',
    rubro: 'Frijol Chiricano',
    phone:'6966-9899',
    bitacora:[{
        name: 'Preparacion y Adecuacion del Suelo',
        startDate: '04/17/2019',
        endDate: '04/19/2019',
        step:[{
            $$hash:Math.random().toString(36).substr(2),
            name:'Arado de Tierra',
            startDate: '04/17/2019',
            endDate: '04/18/2019',
            comments:[
                {
                    $$hash:Math.random().toString(36).substr(2),
                    comment:'Se efectua el arado de tierra y se abona correctamente',
                    postDate:'04/19/2019'
                }
            ]
        }]
    }]
    },
    {
        name:'Pedro Iccasas',
        address: 'Alanje finca 23',
        progress: 5,
        proyect: 'Auto Consumo',
        rubro: 'Frijol Chiricano',
        phone:'6033-7855',
        bitacora:[{
            name: 'Preparacion y Adecuacion del Suelo',
            startDate: '04/17/2019',
            endDate: '04/19/2019',
            step:[{
                $$hash:Math.random().toString(36).substr(2),
                name:'Arado de Tierra',
                startDate: '04/17/2019',
                endDate: '04/18/2019',
                comments:[
                    {   
                        $$hash:Math.random().toString(36).substr(2),
                        comment:'Se efectua el arado de tierra y se abona correctamente',
                        postDate:'04/19/2019'
                    }
                ]
            }]
        },{
            name: 'Irrigacion de Fungicida',
            startDate: '04/17/2019',
            endDate: '04/19/2019',
            step:[{
                $$hash:Math.random().toString(36).substr(2),
                name:'Arado de Tierra',
                startDate: '04/17/2019',
                endDate: '04/18/2019',
                comments:[
                    {
                        $$hash:Math.random().toString(36).substr(2),
                        comment:'Esta actividad cuenta con un atraso de 1 dia se le otrogara una extencion dicho atraso se debe a que los insumos no llegaron a tiempo ',
                        postDate:'04/19/2019'
                    }
                ]
            }]
        }
    ]
        }
    
]
var bitacora =[]
$scope.user = productorList;
$scope.userSelect = '';
$scope.list = bitacora;
$scope.showItem = false;
$scope.show = function(l){
    if(!$(l.target).parent().hasClass('active-row')){
        $(".rowlink").removeClass('active-row')
        $(".rowlink").find('td.action').find('a').empty()
        $(l.target).parent().addClass('active-row')
        $(l.target).parent().find('td.action').find('a').append('<i class="booico-check glyph" title="Selected" style="color:#009999"></i>')
        let target = l.target.parentElement.children[1].innerText;
        $scope.userSelect = target
        angular.forEach($scope.user,function(v,k){
            if(v.name == target){
                $scope.list =[]
                angular.forEach(v.bitacora,function(vs,kd){
                    $scope.list.push(vs);
                    $scope.showItem = true; 
                });  
            }
        
        });
        
        console.log($scope.list)
    }
}
console.log($scope.user)
}]);