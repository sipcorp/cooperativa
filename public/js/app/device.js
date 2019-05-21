$(document).ready(function(){
    
    $(window).load(function(){
        $('#page-loader').fadeOut(3000);
    });

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

// DEVICE DETECTOR - INSERT MENSAJE
    // ------------------------------------------------------------------------------------------------ * -->
    function getDevice(){
        if(window.innerWidth < 768){
            // Extra Small Device
            return "xs";
        } else if(window.innerWidth < 991){
            // Small Device
            return "sm"
        } else if(window.innerWidth < 1199){
            // Medium Device
            return "md"
        } else {
            // Large Device
            return "lg"
        }
    }
