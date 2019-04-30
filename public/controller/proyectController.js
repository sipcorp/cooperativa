'use strict';
app.controller('proyectController', ['$scope','$timeout','$http', function($scope,$timeout,$http) {

var poryectModel = [
    {
        name:'',
        startDate:'',
        endDate:'',
        categoria:'',
        benificiarios:'',
        beneficio:'',
        rubros:[],
        bitacoraModel:[]
    }
]
 var bitacora = [
    // {
    //     name:'TEst',
    //     task:[
    //         {
    //             name:'',
    //             startDate:'',
    //             endDate:'',
    //             step:[
    //                {
    //                 name:'',
    //                 startDate:'',
    //                 endDate:'',
    //                 comments:[]
    //                }
    //             ]
    //         }
    //     ]
    // }
]
$scope.bitacoraModels = bitacora;
$scope.proyect = poryectModel;


// Funciones

/**************************************************************************/
/**************************************************************************/
// FUNCIONES CICLO //

// ADD
$scope.addCiclo = function(hash){
    angular.forEach($scope.bitacoraModels,function(v,k){
        if(hash === v.$$hashKey){
            $scope.bitacoraModels[k].task.push({
                $$hash:Math.random().toString(36).substr(2),
                name:'',
                startDate:'',
                endDate:'',
                step:[
                   {
                    $$hash:Math.random().toString(36).substr(2),
                    name:'',
                    startDate:'',
                    endDate:'',
                    comments:[]
                   }
                ]
            }) 
        }
    })
  
    console.log($scope.cicloList)
}
// DEL
$scope.delCiclo = function(parent,target){
    angular.forEach($scope.bitacoraModels,function(v,k){
        if(v.$$hashKey == parent){
            angular.forEach($scope.bitacoraModels[k].task,function(g,l){
                if(g.$$hash === target){
                    $scope.bitacoraModels[k].task.splice(l, 1); 
                }
            })
        }
    });     
console.log($scope.bitacoraModels)
}

/**************************************************************************/
/**************************************************************************/
// FUNCION STEP //
//ADD
$scope.addStep = function(parent,target){
    angular.forEach($scope.bitacoraModels,function(v,k){
        if(v.$$hashKey == parent){
            angular.forEach($scope.bitacoraModels[k].task,function(g,l){
                if(g.$$hash === target){
                    $scope.bitacoraModels[k].task[l].step.push({
                        $$hash:Math.random().toString(36).substr(2),
                        name:'',
                        startDate:'',
                        endDate:'',
                        comments:[] 
                    })
                }
            }) 
        }
    })
}
// DEL
$scope.delStep = function(parent,task,step){
    angular.forEach($scope.bitacoraModels,function(v,k){
        if(v.$$hashKey == parent){
            angular.forEach($scope.bitacoraModels[k].task,function(g,l){
                if(g.$$hash === task){
                  angular.forEach($scope.bitacoraModels[k].task[l].step,function(m,d){
                      if(m.$$hash === step){
                          $scope.bitacoraModels[k].task[l].step.splice(d, 1);
                      }
                  })
                }
            })
            
        }
    } );     
console.log($scope.cicloList[parent].step)
}
/**************************************************************************/
/**************************************************************************/

// FUINCION UPDATE MODEL
$scope.updateModel = function(step,target,type,hash,phash,shash){
    if(target === ''){
        return false;
    }
    //STEP 
    if(step === 1){
        if(type === 'n'){
            $scope.proyect[0].name = target
        }
        if(type === 'ns'){
            $scope.proyect[0].startDate = dateFormat(target)
        }
        if(type === 'ne'){
            
            $scope.proyect[0].endDate = dateFormat(target)
        }  
    }
    
    //STEP 2
    if(step === 2){
        $timeout(function(){
        if(type === 'cat'){
            $scope.proyect[0].categoria = target.innerText.trim()
        }
        if(type === 'can'){
            $scope.proyect[0].benificiarios = target
        }
        if(type === 'ben'){
            $scope.proyect[0].beneficio = target
        }
        if(type === 'rubro'){
            let array = target.split(","),
            arrayLength = target.split(",").length
           var obj2 = {name:array[arrayLength - 1]}
            var obj = {
                name:array[arrayLength - 1],
                task:[
                    {
                        $$hash:Math.random().toString(36).substr(2),
                        name:'',
                        startDate:'',
                        endDate:'',
                        step:[
                           {
                            $$hash:Math.random().toString(36).substr(2),
                            name:'',
                            startDate:'',
                            endDate:'',
                            comments:[]
                           }
                        ]
                    }
                ]
            }
            $scope.proyect[0].rubros.push(obj2)
            $scope.bitacoraModels.push(obj)
            console.log($scope.bitacoModels)
            console.log($scope.proyect)
            obj = {};
            obj2 ={}
        }
        },600)
       
        
    }
    //STEP 3
    if(step === 3){
            angular.forEach($scope.bitacoraModels,function(v,k){
                if(v.$$hashKey === phash){
                    angular.forEach($scope.bitacoraModels[k].task,function(g,l){
                        if(g.$$hash === hash){
                            if(type === 'task'){$scope.bitacoraModels[k].task[l].name = target}
                            if(type === 'tsd'){$scope.bitacoraModels[k].task[l].startDate = dateFormat(target)}
                            if(type === 'ted'){$scope.bitacoraModels[k].task[l].endDate = dateFormat(target)}
                            
                            //STEP
                            if(type === 'step'){
                                angular.forEach($scope.bitacoraModels[k].task[l].step,function(m,s){
                                 if(m.$$hash === shash){
                                    $scope.bitacoraModels[k].task[l].step[s].name = target  
                                 }
                                })
                            }
                            if(type === 'ss'){
                                angular.forEach($scope.bitacoraModels[k].task[l].step,function(m,s){
                                 if(m.$$hash === shash){
                                    $scope.bitacoraModels[k].task[l].step[s].startDate = dateFormat(target) 
                                 }
                                })
                            }
                            if(type === 'se'){
                                angular.forEach($scope.bitacoraModels[k].task[l].step,function(m,s){
                                 if(m.$$hash === shash){
                                    $scope.bitacoraModels[k].task[l].step[s].endDate = dateFormat(target) 
                                 }
                                })
                            }
                        }
                    })
                    
                }
                console.log($scope.bitacoraModels)
            })
    }
}
/**************************************************************************/
/**************************************************************************/   

// CREATE PROYECT

$scope.addProject = function(){
    $scope.proyect[0].bitacoraModel.push($scope.bitacoraModels)
    console.log($scope.proyect)

    $http.post('/add-project', angular.toJson($scope.proyect))
 .then(function(res) {
   if(res.data.ok === true){
    return res.status(400).json({
        message:'SuccessFull',
        data: res
    })
   }else{
    res.status(800).json({
        message:'ERROR',
        data: res
    })
   }
 })
}
}]);