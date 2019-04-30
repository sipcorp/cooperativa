 $(document).ready(function() {

     // TOP 5 Vendedores
     $('#top1 .progress .bar').progressbar({
         use_percentage: false,
         refresh_speed: 200,
         update: function(current_percentage) {
             $('#top1 .label-value').text(current_percentage + '%');
         },
         done: function(current_percentage) {
             $('#top1 .statistic-values').html('<a class="btn btn-mini btn-yellow pull-left" href="javascript:void(0);">summary</a> <span class="positive"><sup>+526.00</sup><i data-icon="&#xe138;"></i></span> $13,993.30');
         }
     });
     $('#top2 .progress .bar').progressbar({
         use_percentage: false,
         refresh_speed: 200,
         update: function(current_percentage) {
             $('#top2 .label-value').text(current_percentage + '%');
         },
         done: function(current_percentage) {
             $('#top2 .statistic-values').html('<a class="btn btn-mini btn-yellow pull-left" href="javascript:void(0);">summary</a> <span class="negative"><sup>-156.00</sup><i data-icon="&#xe137;"></i></span> $13,004.00');
         }
     });
     $('#top3 .progress .bar').progressbar({
         use_percentage: false,
         refresh_speed: 200,
         update: function(current_percentage) {
             $('#top3 .label-value').text(current_percentage + '%');
         },
         done: function(current_percentage) {
             $('#top3 .statistic-values').html('<a class="btn btn-mini btn-yellow pull-left" href="javascript:void(0);">summary</a> <span class="positive"><sup>+164.30</sup><i data-icon="&#xe138;"></i></span> $12,764.25');
         }
     });
     $('#top4 .progress .bar').progressbar({
         use_percentage: false,
         refresh_speed: 200,
         update: function(current_percentage) {
             $('#top4 .label-value').text(current_percentage + '%');
         },
         done: function(current_percentage) {
             $('#top4 .statistic-values').html('<a class="btn btn-mini btn-yellow pull-left" href="javascript:void(0);">summary</a> <span class="positive"><sup>+1,026.08</sup><i data-icon="&#xe138;"></i></span> $12,334.33');
         }
     });
     $('#top5 .progress .bar').progressbar({
         use_percentage: false,
         refresh_speed: 200,
         update: function(current_percentage) {
             $('#top5 .label-value').text(current_percentage + '%');
         },
         done: function(current_percentage) {
             $('#top5 .statistic-values').html('<a class="btn btn-mini btn-yellow pull-left" href="javascript:void(0);">summary</a> <span class="negative"><sup>+1,666.08</sup><i data-icon="&#xe137;"></i></span> $11,054.33');
         }
     });


     // Seccion de Tabla de Analisis
     $(function() {
         function GenerateSeries(added) {
             var data = [];
             var start = 100 + added;
             var end = 600 + added;

             for (i = 1; i <= 30; i++) {
                 var d = Math.floor(Math.random() * (end - start + 1) + start);
                 data.push([i, d]);
                 start++;
                 end++;
             }

             return data;
         }

         var options = {
             colors: ["#c83157", "#339bb9", "#1083c7", ],
             series: {
                 stack: true,
                 bars: {
                     show: true,
                     lineWidth: 10,
                     barWidth: 0.0
                 },
                 shadowSize: 0,
                 grow: {
                     active: true,
                     steps: 30,
                     stepMode: "maximum",
                     stepDirection: "up"
                 },
             },
             xaxis: {
                 ticks: [],
                 mode: "time",
             },
             yaxis: {
                 ticks: [],
                 min: 0,
                 autoscaleMargin: 0.1
             },
             grid: {
                 color: "#D6D8DB",
                 borderColor: "rgba(255,255,255,0.05)",
                 borderWidth: 0,
                 backgroundColor: {
                     colors: ["rgba(255,255,255,0.05)", "rgba(0,0,0,0.1)"]
                 }
             }
         };

         var data1 = GenerateSeries(0);
         var data2 = GenerateSeries(300);
         var dataset = [data1, data2];

         // $.plot($("#dashChartPayment"), dataset, options);
     });

     // Seccion de Tablas de Facturas
     $('#FPP, #FP').dataTable({
             oLanguage: {
                 sSearch: "Global search: ",
                 sLengthMenu: "Show _MENU_ entries",
                 sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>'
             },
             iDisplayLength: 20,
             //aaSorting: [
             //        [6, 'asc']
             //],
             aoColumnDefs: [{
                 "aTargets": [0],
                 "bSortable": false,
             }, {
                 "aTargets": [1],
                 'sType': 'eu_date'
             }, {
                 "aTargets": [2],
                 'sClass': 'hidden-phone'
             }, {
                 "aTargets": [3],
                 'sClass': 'hidden-phone hidden-tablet',
                 'sType': 'eu_date'
             }, {
                 "aTargets": [4],
                 'sClass': 'hidden-phone hidden-tablet'
             }, {
                 "aTargets": [5]
             }, {
                 "aTargets": [6]
             }],
             sPaginationType: 'full_numbers',
             sDom: "<'row-fluid' <'widget-header' <'span4'l> <'span8'f> > >  Rrt <'row-fluid' <'widget-footer' <'span4' <'table-action-wrapper'> i> <'span8'p> >",

         });

     $('#FPP_length select, #FP_length select').select2({
         minimumResultsForSearch: 6,
         width: "off"
     });

      //**********************************************************//
     //************* TABLA FPP (Facturas por pagar)**************//
    //**********************************************************//
     var action = '<div class="btn-group">' +
         '<a href="#" class="btn btn-mini" style="color: #ececeb;">"  "</a>' +
         '<a href="#responsive" id="pay" class="btn btn-mini btn-primary" data-toggle="modal">Pay</a>' +
         '</div>',
         metodo = '<span class="label label-success">Contado</span>',
         data = invoiceArray(),
         fecha = data[0].Fecha,
         facturaNumber = data[0].Id,
         cliente = data[0].Cliente,
         total = data[0].Total,
         desc = data[0].Descuento;

     $('table#FPP').dataTable().fnAddData([
         action,
         fecha,
         facturaNumber,
         cliente,
         total,
         desc,
         metodo,
     ]);

    // Adecuacion del modal de Pay
     $("#pay").on("click",function(){
        setTimeout(function(){
          if($("#responsive").hasClass("in")){
             $("#responsive").attr('style','margin-top: -316.5px;width: 50%;margin-left: -25%;display: block;');
          };
        }, 300);
     
     });

     // Extraccion de dato cuando se da click en next
     $("#next").on("click",function(){
        var payment = $("#amount").val().replace(",",'').replace(".",'')/100;
        var paymentAmount = total.replace(",",'').replace(".",'')
        var change = parseFloat(paymentAmount) - parseFloat(payment);
          $("#payAmount").val(formatCurrencyNum(paymentAmount * 100));
          $("#payReceived").val(formatCurrencyNum(payment * 100));
          $("#change").val(formatCurrencyNum(change * 100));
     });

     // Validacion de Tarjeta de Credito
     $('#cardNum').on('change', function() {
        var index = $("#paymentType").val(),
            paymetValue = paymentType[index].short,
            value = $(this).val().trim();
          if(paymetValue == "TC"){
              var cardType = creditCardValidation(value);
              if (!cardType) {
                $('#cardNum').addClass('has-error');
              }else{
                $('#cardNum').removeClass('has-error');
              } 
          }
      });

      //**********************************************************//
     //************* TABLA FP (Facturas pagadas)*****************//
    //**********************************************************//
     var action = '<div class="btn-group">' +
         //'<a href="page-invoice-new.html" class="btn btn-mini">Edit</a>' +
         '<a href="tmp-invoice-01.html" target="_blank" class="btn btn-mini">View</a>' +
         '</div>',
         metodo = '<span class="label label-warning">Credito</span>',
         invoice = invoiceArray(),
         fecha = invoice[0].Fecha,
         facturaNumber = invoice[0].Id,
         cliente = invoice[0].Cliente,
         total = invoice[0].Total,
         desc = invoice[0].Descuento;

     $('table#FP').dataTable().fnAddData([action,fecha,facturaNumber,cliente,total,desc,metodo,]);


      //**********************************************************//
     //************* Graficos de Lineas Compuestas **************//
    //**********************************************************//

     var sparklineInvoice = function() {

         $('#DueLine').sparkline([2.7, 3.1, 2.7, 2.5, 1.6, 1.7, 1.9, 2.1, 1.8, 2, 1.9, 2.1, 1.8], {
             type: 'line',
             width: '100%',
             height: '66px',
             lineColor: '#c83157',
             lineWidth: 2,
             fillColor: false,
             spotColor: false,
             minSpotColor: false,
             maxSpotColor: false
         });
         $('#DueLine').sparkline(dataLineDemo, {
             composite: true,
             type: 'line',
             width: '100%',
             height: '66px',
             lineColor: '#31bcc8',
             lineWidth: 2,
             fillColor: false,
             spotColor: false,
             minSpotColor: false,
             maxSpotColor: false
         });
     }
     
      //**********************************************************//
     //**** Cambiar el tamaño de la función sparkline chart *****//
    //**********************************************************//

     var sparkResize;

     $(window).resize(function(e) {
         clearTimeout(sparkResize);
         sparkResize = setTimeout(sparklineInvoice, 250);
     });
     sparklineInvoice();

      // base - default setting
            $('#wizard').bootstrapWizard();
            // nav pills, numbering, submit button well-black
            $('#wizard-black').bootstrapWizard({
                nextSelector: '.wizard-action .next',
                previousSelector: '.wizard-action .previous',
                onTabShow: function (tab, navigation, index) {

                    var $total = navigation.find('li').length;
                    var $current = index + 1;
                    var $percent = ($current / $total) * 100;

                    $('#wizard-black').find('.number-page').html($current + ' <span class="boo-green">of</span> ' + $total);

                    // If it's the last tab then hide the last button and show the finish instead
                    if ($current >= $total) {
                        $('#wizard-black').find('.wizard-action .next').hide();
                        $('#wizard-black').find('.wizard-action .finish').show();
                        $('#wizard-black').find('.wizard-action .finish').removeClass('disabled');
                        $('#wizard-black').find('.wizard-action .cancel').show();
                        $('#wizard-black').find('.wizard-action .cancel').removeClass('disabled');
                    }
                    else {
                        $('#wizard-black').find('.wizard-action .next').show();
                        $('#wizard-black').find('.wizard-action .finish').hide();
                        $('#wizard-black').find('.wizard-action .cancel').hide();
                    }

                }
            });

              // Setting de Input
             function format(item) {
                 return item.tag;
             };
            var paymentType = [
                 {id:0,tag:"Efectivo",short:"C"},
                 {id:1,tag:"Tarjeta Credito",short:"TC"},
                 {id:2,tag:"Tarjeta Debito",short:"TD"},
                 {id:3,tag:"Cheque",short:"CH"}
             ]
            $("#paymentType").select2({
                 minimumResultsForSearch: 2,
                 placeholder: 'Seleccione metodo de pago',
                 data: function() {
                     return {
                         text: 'tag',
                         results: paymentType
                     };
                 },
                 formatSelection: format,
                 formatResult: format
             });
      
    //**********************************************************//
   //************* Modal Metodo de Pago ***********************//
  //**********************************************************//

  $("#paymentType").on("change",function(){

    var index = $("#paymentType").val(),
        paymetValue = paymentType[index].short

    if(paymetValue == "TC"){
        $("#banco").parents("li").prop("hidden",false);
        $("#cardType").parents("li").prop("hidden",false);
        $("#cardNum").parents("li").prop("hidden",false);
        $("#cardEndDate").parents("li").prop("hidden",false);
        $("#ccv").parents("li").prop("hidden",false);
        $("#amount").parents("li").prop("hidden",false);
        $("#chequeNumber").parents("li").prop("hidden",true);
    }    
    if(paymetValue == "TD"){
        $("#banco").parents("li").prop("hidden",false)
        $("#cardNum").parents("li").prop("hidden",false)
        $("#amount").parents("li").prop("hidden",false)
        $("#cardEndDate").parents("li").prop("hidden",true)
        $("#ccv").parents("li").prop("hidden",true)
        $("#chequeNumber").parents("li").prop("hidden",true)
    }
    if(paymetValue == "C"){
        $("#banco").parents("li").prop("hidden",true)
        $("#cardNum").parents("li").prop("hidden",true)
        $("#amount").parents("li").prop("hidden",false)
        $("#cardEndDate").parents("li").prop("hidden",true)
        $("#ccv").parents("li").prop("hidden",true)
        $("#chequeNumber").parents("li").prop("hidden",true)
    }
    if(paymetValue == "CH"){
        $("#banco").parents("li").prop("hidden",false)
        $("#cardNum").parents("li").prop("hidden",true)
        $("#amount").parents("li").prop("hidden",false)
        $("#cardEndDate").parents("li").prop("hidden",true)
        $("#ccv").parents("li").prop("hidden",true)
        $("#chequeNumber").parents("li").prop("hidden",false)
    }        
  });

 // $("#amount").on("blur",function(){
 //    var val =  $("#amount").val();
 //    $("#amount").val(currency(val));
 // }) 

 const number = document.querySelector('#amount');

number.addEventListener('keyup', (e) => {
    const element = e.target;
    const value = element.value;
  element.value = formatCurrencyNum(value);
});
 });