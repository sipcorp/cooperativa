
/*######################################################## */
//                  GLOBAL VARS  JS 
/*######################################################## */
const UrlDeleteRole = "/delete/";
const UrlAddRole = '/add-role';
var roleModel = {
  name: '',
  module: []
}
var $obj = [];
var $sub = [];
var moduleName = "";
var isExists = false;
var isExistsSub = false;
var modules = []
var id = "";
var obj = [];
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "/get-module",
  "method": "GET",
  "headers": {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-cache"
  }
};

var headerAjax = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-cache"
}


