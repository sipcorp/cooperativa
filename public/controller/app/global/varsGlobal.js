
/*######################################################## */
//                  GLOBAL VARS ROLE  JS 
/*######################################################## */
const UrlDeleteRole = "/delete/";
const UrlAddRole = '/add-role';
var UrlAddUsers = '/Signup';
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


/*######################################################## */
//                  GLOBAL VARS CAJA  JS 
/*######################################################## */

const addCaja = "/add-caja"
const getCaja = "/get-caja"
const updateCaja = "/update-caja"


/*######################################################## */
//                  GLOBAL VARS PROJECT JS 
/*######################################################## */
const addProject = "/add-project"
const getProject = "/get-project"

/*######################################################## */
//                  GLOBAL VARS PRODUCTOR JS 
/*######################################################## */
const addProductor = "/add-productor"
const getProductorFilter = "/get-productorFilter"

/*######################################################## */
//                  GLOBAL VARS PROVEEDOR JS 
/*######################################################## */
const addProveedor = "/add-proveedor"
