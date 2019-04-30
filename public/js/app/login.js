$(document).ready(function() {
    var notes = [],
        isValid = null;
        notes['error'] = '<strong>Contraseña o usuario incorrecto.</strong> intente nuevamente.';
    $("#enviar").on("click",function(){
            id = $("input[name=loginid]").val(),
            pass = $("input[name=passwordid]").val();
            isValid = customerModel.loginValidate(id,pass)
            LoginFormValidation(isValid,notes,id)
    });
    $("body").keypress(function(e) {
        //mayor compatibilidad entre navegadores.
        var code = (e.keyCode ? e.keyCode : e.which);
        if(code==13){
            var id = $("input[name=loginid]").val(),
            pass = $("input[name=passwordid]").val();
            isValid = customerModel.loginValidate(id,pass)
            LoginFormValidation(isValid,notes,id)
        }
    });
});

function addLoginLog(id){
    $.get('./addLoginLog.php', {loginid: id},function(result){});
}
function LoginFormValidation(isValid,notes,id){
      // se ajusta el modal   
      setTimeout(function(){
        var jsonModel = JSON.parse(isValid.responseText)
       if(jsonModel._isValid === "1"){
            addLoginLog(id)
            window.location.href = 'home.php';
        }else{
            if($(".notyfy-block").children().length <= 0){
                $(".notyfy-block").notyfy({
                text: notes['error'],
                type: "error",
                dismissQueue: true
            });
            
            }
        }
      }, 500);    
}