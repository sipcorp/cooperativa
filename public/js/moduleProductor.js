$(document).ready(function() {
    // base - default setting
    var provincia = getRegionInfo.provincia(),
        distrito = getRegionInfo.distrito(),
        corregimiento = getRegionInfo.corregimiento(),
        rubro = getRubro.rubroInfo(),
        newProvincia = null,
        newDistrito = null,
        newCorregimiento = null,
        rubroArray = null;
    setTimeout(function() {
        newProvincia = JSON.parse(provincia.responseText);
        newDistrito = JSON.parse(distrito.responseText);
        newCorregimiento = JSON.parse(corregimiento.responseText);
        rubroArray = JSON.parse(rubro.responseText);
    }, 100)
   
    // base - default setting
    $('#wizard').bootstrapWizard();

    // FORM - INPUTMASK PLUGIN
    // ------------------------------------------------------------------------------------------------ * -->

    $("input.maskDate").inputmask("99-99-9999", {
        placeholder: "dd-mm-yyyy"
    });
    $("input.maskID").attr({
        placeholder: "##-####-#####"
    });
    $("input.maskPhone").inputmask("(507) 999-9999", {
        completed: function() {
            alert("Callback when completed");
        }
    });
    $("input.maskCelPhone").inputmask("(507) 9999-9999", {
        completed: function() {
            alert("Callback when completed");
        }
    });
    $("input.maskZipcode").inputmask("99999");

    $("input.maskEmail").on("change", function() {
        var email = $(this).val(),
            isEmail = null,
            errorMessage = '<label for="wzNewEmail" class="error" id="emailError" >el correo electronico no es valido</label>';
        if (!(new RegExp("^[^@]+@([^.]+\\.)+[^.]{2,}$", "i")).test(email)) {
            // Add a new error.
            $(this).parent().parent().addClass("error")
            $(this).parent().append(errorMessage);
        } else {
            // Add a success .
            $(this).parent().parent().removeClass("error")
            $("#emailError").remove();
        }
        console.log(isEmail)
    })

    $(function(wizardFormBar) {
        // navbar, numbering, progressbar, submit button well-nice
        var currentTag = null
        wizardFormBar('#DWZD').bootstrapWizard({
            nextSelector: '.wizard-action .next',
            previousSelector: '.wizard-action .previous',
            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index + 1
                var $percent = ($current / $total) * 100;
                var $wizard = $('#DWZD');
                currentTag = $current
                var $isValidForm = setSummary.validateForm($current );
                if($isValidForm == false) throw 'el formulario contiene'
                if ($percent === 100) {
                    setSummary.createElemnt()
                } else {
                    if ($("ul.summary-list").children().length > 0) {
                        $("ul.summary-list").empty()
                    }
                }
                if ($percent === 20) {
                    $percent = 0
                }
            
                $wizard.find('.bar').css({
                    width: $percent + '%'
                });

                $wizard.find('.number-page').text($current + ' of ' + $total);

                // If it's the last tab then hide the last button and show the finish instead
                if ($current >= $total) {
                    $wizard.find('.wizard-action .next').hide();
                    $wizard.find('.wizard-action .finish').show();
                    $wizard.find('.wizard-action .finish').removeClass('disabled');
                    $wizard.find('.wizard-action .print').show();
                    $wizard.find('.wizard-action .print').removeClass('disabled');
                    $wizard.find('.wizard-action .cancel').show();
                    $wizard.find('.wizard-action .cancel').removeClass('disabled');
                } else {
                    $wizard.find('.wizard-action .next').show();
                    $wizard.find('.wizard-action .finish').hide();
                    $wizard.find('.wizard-action .print').hide();
                    // $wizard.find('.wizard-action .cancel').hide();
                }

            }

        })
        wizardFormBar('#DWZD .finish').click(function() {
            alert('Finished!, Starting over!');
            $('#DWZD').find("a[href*='tab1fb']").trigger('click');
            wizardFormBar('#wzNewPrefix').val(rand_code(2, 6, ''))
        })
        
        // SECCION DE TAB DE DIRECCION
        wizardFormBar('#wzNewAddressState').select2({
            minimumInputLength: 2,
            placeholder: 'seleccione una provincia',
            data: function() {
                return {
                    text: 'tag',
                    results: newProvincia
                };
            },
            formatSelection: format,
            formatResult: format
        });
        wizardFormBar('#wzNewDist').select2({
            minimumInputLength: 2,
            placeholder: 'seleccione un distrito',
            data: function() {
                var wzNewDist = newElemtArray(newProvincia, newDistrito, 'wzNewAddressState', 1)
                return {
                    text: 'tag',
                    results: wzNewDist
                };
            },
            formatSelection: format,
            formatResult: format
        });
        wizardFormBar('#wzNewRubro').select2({
            placeholder: 'Seleccione Rubros',
            data: function() {
                return {
                    text: 'tag',
                    results: rubroArray
                };
            },
            formatSelection: format,
            formatResult: format,
            maximumSelectionLength: 10,
            multiple: true,
            tokenSeparators: ','
        });
        wizardFormBar('#wzNewCorregi').select2({
            minimumInputLength: 2,
            placeholder: 'seleccione un corregimiento',
            data: function() {
                var wzNewCorregi = newElemtArray(newDistrito, newCorregimiento, 'wzNewDist', 2)
                return {
                    text: 'tag',
                    results: wzNewCorregi
                };
            },
            formatSelection: format,
            formatResult: format
        });
        // SECCION DE CALCULO DE EDAD
        wizardFormBar('#wzNewDob').on("change", function() {
            var date = new Date($(this).val()),
                currentDate = new Date(),
                yourYears = currentDate.getFullYear() - date.getFullYear();
            $("#wzNewAge").val(yourYears);
        })
        wizardFormBar('#DWZD button[name=wzNewGender]').on("click",function(){
           setTimeout(function(){
               var sThis = $('#DWZD button.btn.active'),
                   value = (sThis[0].value === 'male') ? "Masculino" : "Femenino"
                sThis.parents("li.control-group.error").removeClass("error")
                sThis.parents("div.controls").children("label#formError.error").remove(); 
                sThis.parents("div.controls").children("input#wzNewGenderInput").val(value)
           },20)
            
        })
        wizardFormBar('#wzNewPrefix').val(rand_code(2, 6, ''))
        wizardFormBar('.wizard-action .next1').hide();
        wizardFormBar("#wzNewFirstName").on("change", function() {
            if (this.value !== "") {
                wizardFormBar('.wizard-action .next1').show();
            }
        });
        wizardFormBar('#DWZD input[id*=wzNew]').on("change",function(){
            setSummary.validateForm(currentTag )
            // if($(this).parent().parent().hasClass("error")){  
            //     $(this).parent().parent().removeClass("error")
            //     $("#formError").remove();    
            // }
        });
    });
});

// Setting de Input
function format(item) {
    return item.tag;
};
var productorArray = new Object(); 
const setSummary = {
    createElemnt: function() {
        var $formElemet = $("#DWZD");
        // Crear primer elemento
        var items = $formElemet.find(".tab-content.section-content.item").children(),
            elemP = null
        $.each(items, function(_i, _v) {
            if (_i <= 4) {
                if (_i === 3 || _i === 4) {
                    var preview = $("<li>", {
                        'class': 'control-group row-fluid'
                    }).append(
                        $("<div>", {
                            'class': 'span12 well well-small well-nice span-item' + _i
                        })
                    )
                    var itemsId = _v.id,
                        liElemet = $("#" + itemsId).find(".control-group");
                    $("ul.summary-list").append(preview)
                    $.each(liElemet, function(_e, _l) {
                        if (_e < 3) {
                            $(".span-item" + _i).append(
                                elemP = $("<p>").append(
                                    $("<span>", {
                                        'class': 'label-field',
                                        'text': _l.firstElementChild.textContent.replace("*","")
                                    }),
                                    $("<span>", {
                                        'class': 'field bold',
                                        'text': (_l.lastElementChild.firstElementChild.innerText.indexOf(",")  === -1) ? _l.lastElementChild.firstElementChild.innerText : _l.lastElementChild.firstElementChild.innerText.split(",")
                                    })
                                )
                            )
                            productorArray[$.trim(_l.firstElementChild.textContent.replace("*",""))] = $.trim((_l.lastElementChild.firstElementChild.innerText.indexOf(",")  === -1) ? _l.lastElementChild.firstElementChild.innerText : _l.lastElementChild.firstElementChild.innerText.split(","))
                        } else {
                            $(".span-item" + _i).append(
                                elemP = $("<p>").append(
                                    $("<span>", {
                                        'class': 'label-field',
                                        'text': _l.firstElementChild.textContent.replace("*","")
                                    }),
                                    $("<span>", {
                                        'class': 'field bold',
                                        'text': _l.lastElementChild.firstElementChild.value
                                    })
                                )
                            )
                            productorArray[$.trim(_l.firstElementChild.textContent.replace("*",""))] = _l.lastElementChild.firstElementChild.value
                        }
                    })
                }else{
                    var preview = $("<li>", {
                        'class': 'control-group row-fluid'
                    }).append(
                        $("<div>", {
                            'class': 'span12 well well-small well-nice span-item' + _i
                        })
                    )
                    var itemsId = _v.id,
                        liElemet = $("#" + itemsId).find(".control-group"),
                        text = null,
                        otherText = null
                    $("ul.summary-list").append(preview)
                    $.each(liElemet, function(_e, _l) {
                        text = $.trim(_l.firstElementChild.textContent.replace("*",""))
                        if(text === "Nombre Completo"){text = "nombre"} 
                        if(text === "Fecha de Nacimiento"){text = "fecha"}
                        if(text === "ID   guiones necesarios"){text = "id"}
                        otherText = _l.lastElementChild.firstElementChild.value
                        if (otherText === undefined || otherText === "") {
                            otherText = $.trim($("#wzNewGender button.active")[0].innerText)
                        }
                        $(".span-item" + _i).append(
                            elemP = $("<p>").append(
                                $("<span>", {
                                    'class': 'label-field',
                                    'text': text
                                }),
                                $("<span>", {
                                    'class': 'field bold',
                                    'text': otherText
                                })
                            )
                        )
                        productorArray[text] = otherText

                    })  
                }
            } 
        })
        console.log(productorArray)
    },
    validateForm: function(i){
        var $tabID = [{id: 1, tag: "#tab1fb"},{id: 2,tag: "#tab2fb"},{id: 3,tag: "#tab3fb"},{ id: 4,tag: "#tab4fb"},
        {id: 5,tag: "#tab5fb"}
        ] ,
         search = null,
         errorMessage = null,
         response = true,
         validTab = (i - 1) == 0 ? 1 : (i - 1),
         tagID = $tabID[validTab - 1].tag
         if(validTab >1 ){
            search = $(tagID).find('input')
            $.each(search,function(_i,_v){
                var isValid = null,
                    isIdValid = null,
                    idInput = _v.id;
                if(idInput === "wzNewID"){
                    var e = ($(this)[0].value === "") ? "000000" : $(this)[0].value ,
                    isIdValid = validateCedula(e)
                    isValid = isIdValid.isValid
                }else{
                    isValid = (_v.value != "") ? true: false
                }
                if(isValid === false){
                    errorMessage = '<label for="'+idInput+'" class="error" id="formError" >este campo no puede ir vacio</label>';
                    $(this).parent().parent().addClass("error")
                    $(this).parent().append(errorMessage);
                    response = false;
                    
                }else{
                    $(this).parent().parent().removeClass("error")
                    $("#formError").remove(); 
                    response = true;
                }
            })
         }
         
return response
    }
}

// PRINT BUTTON
// ------------------------------------------------------------------------------------------------ * -->

$(".print").on("click", function() {
    window.print();
})
$("input").keypress(function(e){
    var inputID = "#" + $(this)[0].id
    if(inputID === "#wzNewMaritalStatus"){
        var response = keyNumOnly(e)
        return response
    }  
})

$("#wzNewID").on("change",function(){
    var e = $(this)[0].value,
        errorMessage = null,
        response = validateCedula(e)
    if(response.isValid === false){
        errorMessage = '<label for="wzNewID" class="error" id="formError" >cedula invalida</label>';
        $(this).parent().parent().addClass("error")
        $(this).parent().append(errorMessage);
        response = false;
    }else{
        $(this).parent().parent().removeClass("error")
        $("#formError").remove(); 
        response = true;
    }
})


$("#addDate").append(currentDate(2,2))

$('#DWZD .cancel').click(function() {  
    $(".loader").css("display","block").fadeOut(1500, function() {"slow"});
    $('#DWZD')[0].reset();
    $(".tab-content").find(".tab-pane .active") .removeClass("active")
    $("div#tab1fb.tab-pane").addClass("active")
    $('.wizard-action .next1').hide();
    $('#wzNewPrefix').val(rand_code(2, 6, ''))
})
