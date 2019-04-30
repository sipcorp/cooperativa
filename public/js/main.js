$(document).ready(function () {
var user = $("#userCode").text()
$.get('./customerModel.php', {loginid: user},function(result){
        var model = $.parseJSON(result);
        $("#roleMember").text(model.roleName)
        $("#lastLogin").text(setDay(model.lastloginDate))
    });
    function setDay(date){
        var date = new Date(date), 
        newDay = null,
        options = { year: 'numeric', month: 'short', day: 'numeric' };
        newDay = date.toLocaleDateString("es-ES", options)
        return newDay
  }  
});    