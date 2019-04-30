'use strict';
var carService = angular.module('carService', []);
carService.factory("carService", function(){
 var ret = function(){}
  ret.listaCompartida =[{id:'test'}];
  ret.anadirElemento = function(nuevoElemento){
  	ret.listaCompartida.push(nuevoElemento);
  }
  ret.limpiarLista = function(){
  	ret.listaCompartida = [];
  }
  return ret;
})