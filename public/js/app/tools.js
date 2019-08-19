$(document).ready(function () {
    var startDate = new Date();
    var endDate = new Date();
    $('#DTP1').datepicker()
        .on('changeDate', function (ev) {
            /*if(ev.date.valueOf() > endDate.valueOf()) {
                    $('#alert').show().find('.msg').text('La fecha Desde no puede ser mayor a la fecha Hasta.');
            } else {*/
            //$('#alert').hide();
            startDate = ev.date;
            $('#startDate').text(dateFormat(startDate, 1));
            //}
            $('#DTP1').datepicker('hide');
        });

    // bootstrap datepicker demo
    $('#DTP2').datepicker()
        .on('changeDate', function (ev) {
            /*if(ev.date.valueOf() < startDate.valueOf()) {
                    $('#alert').show().find('.msg').text('La fecha Hasta no puede ser mayor a la fecha Desde.');
            } else {*/
            $('#alert').hide();
            endDate = ev.date;
            $('#endDate').text(dateFormat(endDate, 1));
            //}
            $('#DTP2').datepicker('hide');
        });

    // FORM - LIMITER
    // ------------------------------------------------------------------------------------------------ * -->
    // Content/plugins/pl-form/counter/js/jquery.counter.js
    $(".limiteChar15").counter({
        goal: 25,
        msg: 'Usar nombre comercial no mayor',
        type: 'char'
    });
    $(".limiteChar15-s").counter({
        goal: 25,
        msg: 'Usar nombre comercial no mayor',
        type: 'char'
    });
    $(".limiteChar140").counter({
        goal: 140
    });
    $(".limiteWords15").counter({
        goal: 15,
        type: 'word',
        msg: 'Descripcion corta palabras'
    });
    $(".obser").counter({
        goal: 50,
        type: 'word',
        msg: 'Seccion de uso interno'
    });
    $(".countingChar").counter({
        goal: 'sky',
        msg: 'have written'
    });



    // FORM - ELASTIC TEXTAREA
    // ------------------------------------------------------------------------------------------------ * -->
    // Content/plugins/pl-form/elastic/js/jquery.elastic.js
    $('textarea.auto').elastic();
    $('textarea.auto').trigger('update');

    // FORM - CLEAR FIELD
    // ------------------------------------------------------------------------------------------------ * -->
    $.fn.clearicon = function (options) {
        // default settings
        var config = {
            "in": 'fadeIn',
            "out": 'fadeOut',
            "speed": 'fast',
            "css": {
                "right": "-3px",
                "top": "-5px"
            },
            "html": '<i class="fontello-icon-cancel-circle-2 opaci55"></i>',
            "click": function () {
                // general purposes functionality for clearing a field element
                $(this).val('').removeAttr('checked').removeAttr('selected').keyup();
            }
        };
        if (options) $.extend(config, options);
        // do the magic
        $(this).each(function () {
            // the current element
            var self = $(this);
            var ctr = $('<span style="position: relative; width:auto; overflow: hidden;" class="clear-icon-wrap"/>');
            $(this).wrap(ctr);
            var btn = $('<a style="position: absolute;" class="btn btn-glyph btn-link clear-icon-btn" href="javascript:;"/>');
            btn.css(config.css).html(config.html);
            self.after(btn);
            // handle clicking of button
            if (config.click) btn.click(function () {
                config.click.apply(self);
            });
            // handle value changes of input
            self.keyup(function () {
                if (self.val().length > 0) {
                    btn[config['in']](config.speed);
                } else {
                    btn[config['out']](config.speed);
                }
            });
            // trigger initial state
            self.keyup();
        });
        return this;
    };

    $('.clear-field').clearicon();
    $('.clear-textarea').clearicon({
        'css': {
            'right': '-3px',
            'top': '0'
        },
    });


    // PREFIX PRODUCTOR
    $("#wzNewPrefix").val(rand_code(2, 7, ""))
    // PREFIX PROVEEDOR
    $("#wzNewPrefixProveedor").val(rand_code(2, 7, ""))
    // form validate
    // var $rule1 = $('#wizard-progress').validate({
    //     ignore: "",
    //     rules: {
    //         accNewFirstName: {
    //             required: true,
    //             minlength: 4,
    //             maxlength: 20
    //         }
    //     },
    //     messages: {
    //         accNewFirstName: {
    //             required: "Please enter a First Name",
    //             minlength: "First Name must be at least 4 characters",
    //             maxlength: "First Name must be no more than 20 characters"
    //         }
    //     },

    //     highlight: function (label) {
    //         $(label).closest('.control-group').addClass('error');
    //     },
    //     errorPlacement: function (error, label) {
    //         $(label).closest('.controls').append(error);
    //     }
    // })

    // // form validate
    // var $rule2 = $('#wizard-progress').validate({
    //     ignore: "",
    //     rules: {
    //         accNewGenderInput: {
    //             required: true
    //         }
    //     },
    //     messages: {
    //         accNewGenderInput: {
    //             required: "Please enter a gender"
    //         }
    //     },

    //     highlight: function (label) {
    //         $(label).closest('.control-group').addClass('error');
    //     },
    //     success: function (label) {
    //         $(label).text('OK!').addClass('valid')
    //             .closest('.control-group').addClass('success');
    //     },
    //     errorPlacement: function (error, label) {
    //         $(label).closest('.controls').append(error);
    //     }
    // })


    // Format Currency
    $("#priceP").on("blur",function(){
        var e = $("#priceP").val()
        $("#priceP").val("$" + formatCurrencyNum(e))
    })

    $("#stocks").on("blur",function(){
        var es = $("#stocks").val()
        $("#stocks").val(digits(es))
    })

    $("#alerts").on("blur",function(){
        var es = $("#alerts").val()
        $("#alerts").val(digits(es))
    })
});


