$(document).ready(function() {
    
    // VARIABLES GLOBALES
    var pais = paisArray(),
        estado = estadoArray(),
        ciudad = ciudadArray(),
        customer = customerArray(),
        product = productArray(),
        asesor = asesorArray(),
        typeID = typeidArray(),
        paymentType = paymentArray(),
        invoiceDisc = discountArray(),
        imps = 0; // CONFIGURABLE

    // GENERA NUMERO DE FACTURA    
    $('#InvoiceNumber').val(rand_code(1, 5,''));
    
    // GENERA PREFIX DE CLIENTE
    $("#addCustomer").on("click", function() {
        $("#accountPrefix").val(rand_code(2, 7, ""))
    });

    
    // const number = document.querySelector('input[name*=quantity_]');
    // number.addEventListener('keyup', (e) => {
    //     const element = e.target;
    //     const value = element.value;
    //   element.value = formatNumber(value);
    // });
    $(document).on('keyup', "input[name*=quantity_]", function() {
        const element = $(this);
        const value = element[0].value;
        element.val(formatNumber(value));
    });
    // Setting de Input
    function format(item) {
        return item.tag;
    };
    $("#invoiceTo").select2({
        minimumResultsForSearch: 2,
        placeholder: 'Seleccione cliente',
        data: function() {
            return {
                text: 'tag',
                results: customer
            };
        },
        formatSelection: format,
        formatResult: format
    });
    $("#typeID").select2({
        minimumInputLength: 1,
        placeholder: 'Selecciona el tipo de identificacion',
        data: function() {
            return {
                text: 'tag',
                results: typeID
            };
        },
        formatSelection: format,
        formatResult: format
    });
    $("#paymentType").select2({
        minimumResultsForSearch: 2,
        placeholder: 'Selecciona un metodo de pago',
        data: function() {
            return {
                text: 'tag',
                results: paymentType
            };
        },
        formatSelection: format,
        formatResult: format
    });
    $("#invoiceDisc").select2({
        minimumResultsForSearch: 2,
        placeholder: 'Aplicar descuento',
        data: function() {
            return {
                text: 'tag',
                results: invoiceDisc
            };
        },
        formatSelection: format,
        formatResult: format
    });
    $("#pais").select2({
        minimumInputLength: 2,
        placeholder: 'seleccione un pais',
        data: function() {
            return {
                text: 'tag',
                results: pais
            };
        },
        formatSelection: format,
        formatResult: format
    });
    $("#pais ,#estado").on("change", function() {
        $target = $(this);
        if ($target[0].id == "pais") {
            $("#estado").attr("disabled", false);
        } else {
            $("#ciudad").attr("disabled", false);
        }
    })
    $("#estado").select2({
        minimumInputLength: 1,
        placeholder: 'seleccione un estado',
        data: function() {
            var newState = newArrayCountry(pais, estado, "pais", 1)
            return {
                text: 'tag',
                results: newState
            };
        },
        formatSelection: format,
        formatResult: format
    });
    $("#ciudad").select2({
        minimumInputLength: 1,
        placeholder: 'seleccione un ciudad',
        data: function() {
            var newCity = newArrayCountry(estado, ciudad, "ciudad", 2)
            return {
                text: 'tag',
                results: newCity
            };
        },
        formatSelection: format,
        formatResult: format
    });
    $("#item_line1").select2({
        minimumResultsForSearch: 2,
        placeholder: 'Seleccione Producto',
        data: function() {
            return {
                text: 'tag',
                results: product
            };
        },
        formatSelection: format,
        formatResult: format
    });
    $("#salesPerson").select2({
        minimumResultsForSearch: 6,
        placeholder: 'Please select a person',
        data: function() {
            return {
                text: 'tag',
                results: asesor
            };
        },
        formatSelection: format,
        formatResult: format
    });
    /* Agegar informacion del cliente seleccionado
     ** Historial:
     */
    $("#invoiceTo").on("change", function() {
        $customer = $(this);
        var source = $customer[0].value,
            invoiceType = customer[source].invoiceType,
            timeLimit = customer[source].timeLimit;
        $("#invoiceType").val(invoiceType);
        $("#timeLimit").val(timeLimit);
    })
    /* ADD PRODUCT
     **  Historial:
     */
    $("#additem").on("click", function() {
        // Se cargan elementos necesarios para crear el tr
        var nextitem = $("#invoiceLine tbody").children("tr").length,
            inputId = "#item_line" + (parseInt(nextitem) + 1),
            top = parseInt(346) + (parseInt(32) * parseInt(nextitem)),
            trId = parseInt(nextitem) + 1,
            inputValid = $("tr#item" + (parseInt(nextitem) + 1)).length;
        if (inputValid == 1) {
            trId = parseInt(nextitem) + 2;
            inputId = "#item_line" + (parseInt(nextitem) + 2);
        }
        // Se crea el elemento para inyectar
        element = '<tr id="item' + trId + '">' + '<td>' +
            '<a class="btn btn-mini btn-danger cut hidden-print " style="position:  absolute;left: 178px;top: ' + top + 'px;">-</a>' +
            '<input type="hidden" class="input-block-level" id="item_line' + trId + '" name="product_line' + trId + '" value="">' + '</td>' +
            '<td>' + '<input type="text" class="input-block-level" name="description_line' + trId + '" value="" disabled="">' + '</td>' +
            '<td>' + '<input type="text" class="input-block-level"  name="quantity_line' + trId + '"value="" disabled="">' + '</td>' + '<td>' +
            '<input type="text" class="input-block-level" name="price_line' + trId + '" value="" disabled="">' + '</td>' + '<td>' +
            '<input type="text" class="input-block-level" name="amount_line' + trId + '" value="" disabled="">' + '</td>' + '</tr>'
        $("#invoiceLine tbody").append(element);
        //Se le agrega setting del pluging select2
        $(inputId).select2({
            minimumResultsForSearch: 6,
            placeholder: 'Seleccione producto',
            data: function() {
                var newDataPR = newArray();
                return {
                    text: 'tag',
                    results: newDataPR
                };
            },
            formatSelection: format,
            formatResult: format
        });
    });
    /*DELETE ITEM
     ** Historial
     */
    $("body").on("click", "a.cut", function() {
        var array = [];
        //Se carga el elemento seleccionado
        $element = $(this); //"#"+ $("a.cut").parent("td").parent("tr").attr("id");
        $itemArray = $("table#invoiceLine");
        // Se cargan los valores necesarios para recalcular la posicion del
        var elementDel = "#" + $element[0].parentElement.parentElement.id,
            totalItem = $("#invoiceLine tbody").children("tr").length;
        //position = $element.position(),
        //"#"+$(elementDel).siblings("tr")[1].id,
        /* Se valida el elemento a eliminar para cuando sea la primera
           posicion los input se les de valor de default de caso contrario
           se elimina y se recalcula la posicion del boton de Delete  */
        if (elementDel === '#item') {
            $(elementDel + ' ' + 'input').val("");
        } else {
            $(elementDel).remove();
            let x = 1;
            let top = 0;
            let startLoop = $itemArray[0].children[2].children.length;
            for (var i = 0; i < startLoop; i++) {
                if ($itemArray[0].children[2].children[i].id != "item") {
                    array.push($itemArray[0].children[2].children[i].id)
                }
            }
            $.each(array, function(index, val) {
                top = parseInt(346) + (parseInt(32) * parseInt(x))
                $("#" + val).find("a.cut").attr("style", "position:absolute;left:178px;top:" + top + "px;")
                startLoop--
                if (x <= totalItem) {
                    x++
                };
            });
        };
    })
    /*SELECCIONAR PRECIO DEL PRODUCTO
     ** Historial:
     */
    $("body").on("change", "input[name*=product_line]", function() {
        // SE Extrae el precio del producto seleccionado
        $input = $(this);
        $tr = $input.parents("tr");
        var inputtag = product[$("#" + $input[0].id).val()].tag,
            priceVal = product[$("#" + $input[0].id).val()].precio,
            trId = "#" + $tr[0].id + ' ' + "input",
            //Seextrae los id de los Input de Cantidad, precio y descripcion
            desc = $tr[0].children[1].children[0].name,
            qty = $tr[0].children[2].children[0].name,
            price = $tr[0].children[3].children[0].name;
        amount = $tr[0].children[4].children[0].name;
        // Se activan los input para que se puedan editar 
        //$(trId).attr("disabled",false);
        $("input[name=" + qty + "]").prop("disabled", false);
        // $("input[name="+price+"]").prop("disabled",false);
        // $("input[name="+amount+"]").prop("disabled",false);
        $("input[name=" + qty + "]").val(1);
        $("input[name=" + price + "]").val(priceVal);
        $("input[name=" + amount + "]").val(priceVal);
        newAmount(1, $input);
    });
    $("body").on("blur", "input[name*=quantity_]", function() {
        $element = $(this);
        var elementVal = $element[0].value.replace(".", '');
        val = numValidate(parseFloat(elementVal));
        if (val == 1 || val == 999999) {
            $element.val(val);
        }
        newAmount(val, $element);
    });
    // $("input[name*=quantity_]").blur(function(){
    //        $element = $(this);
    //        let val = numValidate(parseFloat($element.val()));
    //        if(val == 1 || val == 999999){$element.val(val); }
    //        newAmount(val,$element);
    //     })
    /**********************************************************************************************/
    /********************************* SECCION DE FUNCIONES **************************************/
    /********************************************************************************************/
    /*Funcion para cargar el array de los productos desabilitados
     ** Historial:
     */
    function newArray() {
        $table = $("table#invoiceLine tbody").children("tr").children("td").children("input[id*=item]")
        var disableItem = 1000; //$("input#item_line1").val();
        var newArray = new Array;
        $.each($table, function(index, val) {
            var len = $table[index] === undefined ? 0 : 1,
                int = 0;
            if (len == 1) {
                int = $table[index].id;
                disableItem = parseInt($("input#" + int).val());
            }
            $.each(product, function(index, val) {
                if (disableItem == index) {
                    //val.disabled=true;
                    delete product[disableItem]
                } else {
                    if (product[index] != undefined) {
                        var name = product[index].tag,
                            productIndex = index
                        if ($.isEmptyObject(newArray) === true) {
                            newArray.push(product[productIndex])
                        } else {
                            var exists
                            $.each(newArray, function(index, vals) {
                                if (name === vals.tag) {
                                    exists = 1
                                }
                            });
                            if (exists != 1) {
                                newArray.push(product[productIndex])
                            }
                        }
                    }
                }
            });
        });
        return newArray
    }
    /* Funcion para cargar los array de estado y ciudad dependiendo
       del pais que selecciones
     ** Historial:
    */
    function newArrayCountry(array1, array2, item, type) {
        var value = "",
            target = "",
            array = [];
        if (type == 1) {
            array = array2
            value = $("#" + item).val()
            if (value !== "") {
                $.each(array1, function(index, val) {
                    if (value == index) {
                        target = val.country;
                    }
                });
                $.each(array2, function(index, val) {
                    if (target != val.country) {
                        delete array[index];
                    }
                });
            }
        } else {
            array = array2
            value = $("#" + item).val()
            if (value !== "") {
                $.each(array1, function(index, val) {
                    if (value == index) {
                        target = val.short;
                    }
                });
                $.each(array2, function(index, val) {
                    if (target != val.short) {
                        delete array[index];
                    }
                });
            }
        }
        return array;
    };
    // Funcion para configurar la fecha por defecto (fecha actual)
    // Historial:
    // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    $('#datetimepicker2').datetimepicker({
        language: 'en',
        pick12HourFormat: true
    });
    $("#datetimepicker2 input").val(currentDate(1, 1));
    /* Funcion para el calculo del la nueva cantidad
     ** Historial;
     */
    function newAmount(quantity, item) {
        $parentId = item[0].parentElement.parentElement.id;
        $inputAmount = $("table#invoiceLine tbody").find("input[name*=amount_]");
        var price = parseFloat($("#" + $parentId + " input[name*=price_]")[0].value),
            amount = $("#" + $parentId + " input[name*=amount_]")[0].name,
            newAmount = currency((parseInt(quantity) * price)),
            loppStar = $inputAmount.length,
            sumaryAmount = 0,
            desc = 0,
            amountTotal = 0;
        if (quantity > 1) {
            $("input[name=" + amount + "]").val(newAmount);
        }
        if (loppStar == 1) {
            $("table#invoiceLine input#TotalAmount").val(newAmount)
        } else {
            /*Se calcula el sumary del amount*/
            $.each($inputAmount, function(index, val) {
                var formarVal = val.value.replace(",", '').replace(".", '')
                sumaryAmount += parseInt((formarVal === "") ? 0 : (formarVal))
            });
            $("table#invoiceLine input#TotalAmount").val(currency((sumaryAmount / 100)))
        }
    }
    /* Funcion para solo permitir numeros en los campos de cantidad
     ** Historial;
     */
    $("input[name*=quantity_]").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
});