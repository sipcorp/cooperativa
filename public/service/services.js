'use strict'
app.factory("Dataservice", function ($http) {
  const getRole = "/get-role"
  var Dataservice = {
    GetRoles: function () {
      return $http.get(getRole).then(function (data) {
        return data;
      });
    },

  }
  return Dataservice;
})