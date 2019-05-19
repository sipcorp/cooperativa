$(document).ready(function(){
    var page = document.title;
    page = page.replace("SIP-","")
    var d = getDevice() 
    if(d === 'xs' || d === 'sm'){
        if(page != "bitacora"){
          $("#modalOnLoad").modal('show'); 
        $(".fade").css({"opacity": "1"})
        $("#modalOnLoad").css({
            "top":"27%"
        });  
        }   
    }
});

