$(document).ready(function() {
    // DATATABLE customer
    $('#customer')
        .dataTable({
            bAutoWidth: false,
            bSortCellsTop: true,
            BProcessing: true,
            oLanguage: {
                sSearch: "Global search: ",
                sLengthMenu: "Show _MENU_ entries",
                sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>'
            },
            iDisplayLength: 10,
            aaSorting: [
                [1, 'asc']
            ],
            aoColumnDefs: [{
                "aTargets": [0],
                'bSortable': false,
                'sWidth': '25px'
            }, {
                "aTargets": [1],
                'sWidth': '65px',
                'sClass': 'bold'
            }, {
                "aTargets": [3],
                'sClass': 'text-right',
                'sType': 'eu_date'
            }, {
                "aTargets": [4],
                'sClass': 'text-right',
                'sType': 'eu_date'
            }, {
                "aTargets": [5],
                'sWidth': '120px',
                'sClass': 'text-right'
            }, {
                "aTargets": [6],
                'sWidth': '120px',
                'sClass': 'text-right'
            }],
            sPaginationType: 'full_numbers',
            sDom: "<'row-fluid' <'widget-header' <'span4'l> <'span8'<'table-tool-wrapper'><'table-tool-container'>> > > rti <'row-fluid' <'widget-footer' <'span6' <'table-action-wrapper'>> <'span6'p> >>",

            // fnFooterCallback: function(nRow, aaData, iStart, iEnd, aiDisplay) {
            //     var iPageSum = 0;
            //     for (var i = iStart; i < iEnd; i++) {
            //         iPageSum += aaData[aiDisplay[i]][5] * 1;
            //     }
            //     var nCells = nRow.getElementsByTagName('th');
            //     nCells[5].innerHTML = parseInt(iPageSum * 100) / 100;
            // }
        })
        // Table Filter
        .columnFilter({
            sPlaceHolder: 'head:after',
            aoColumns: [
                null, {
                    type: 'number'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                }, {
                    type: 'text'
                },{
                    type: 'text'
                }
            ]
        });
    // inject to datatable DTCF
    $('#customer_wrapper .table-tool-wrapper')
        .html($('#DTCF_toolBar')
            .html());
    $('#customer_length select').select2({
        minimumResultsForSearch: 6,
        width: "off"
    });

    var perfilC = "<span>6 ha</span>",
        perfilD = "<span>1,000 ud</span>",
        statusA = "<span class='label label-info'>Activo</span>",
        statusS = "<span class='label label-danger'>Suspendido</span>",
        check = "<input type='checkbox' class='checkbox check-row' value='0' for='' name='checkRow'>";
        
    
    var data = [
    {
        id: "SIP-5423",
        customer: "Corporacion Platanera S.A",
        rubro: "Platano",
        produccion: perfilC,
        estatus:statusA,
        step: 2,
        nameStep: "Aplicación de Herbicida quemante",
        provincia: "Chiriqui",
        distrito: "Alanje",
        direccion: "Cabo de la vela despues del molino Beto Vanega",
        telefono: "721-9658",
        contacto: "Alberto Sierra"
    },
    {
        id: "SIP-55984",
        customer: "Hacienda Catalina S.A",
        rubro: "Pollo",
        produccion: perfilD,
        estatus: statusS,
        step: 3,
        nameStep: "Siembra",
        provincia: "Chiriqui",
        distrito: "Alanje",
        direccion: "Punta Almeja detras de la piladora Rubirosa",
        telefono: "721-7895",
        contacto: "Jose Perea"
    }];

    $.each(data, function(index, val) {
        let id = val.id
        let cust = val.customer
        let date = val.rubro
        let profile = val.produccion
        let status = val.estatus
        let act = '<div class="btn-group">'+
        '<a class="btn  btn-glyph" data-icon="" aria-hidden="true"></a>'+
        '<a href="#addTime" data-toggle="modal" class="btn  btn-glyph" data-icon="" aria-hidden="true" id="time'+index+'"></a>'+
        '<a href="#address" data-toggle="modal" class="btn  btn-glyph" data-icon="" aria-hidden="true" id="dirc'+index+'"></a>'+
       '<a href="#comments" data-toggle="modal" class="btn  btn-glyph" data-icon="" aria-hidden="true" id="coment'+index+'"></a>'+
    '</div>'
        $('table#customer').dataTable().fnAddData([
             check,
             id,
             cust,
             date,
             profile,
             status,
             act
        ]);
    });
    
    var dataComments = [
        {
            id: "0201",
            bitacoraID: "SIP-5423",
            user: "Jose Roja",
            date: "09-09-2018 02:30 PM",
            comments: "Esta es una prueba de los comentarios y la manera en que tiene que llegarme la data"
        },
        {
            id: "0202",
            bitacoraID: "SIP-5423",
            user: "Jose Roja",
            date: "09-10-2018 04:30 PM",
            comments: "Es por esto que estamos probando como crear el elemento DOm para ser insertado"
        }
    ]; 

    // se desabilitad el search para el action
    $('input[value=Action]').attr('disabled',true)


    // ajuste de los modales de comments,addTime,address
    $("a[id*=coment],a[id*=time],a[id*=dirc]").on("click",function(){

        //variables
        var id = $(this)[0].id,
            isChecked = $("#"+id).parents("tr").find("input[name=checkRow]").prop("checked"),
            target = "",
            targetID = $("#"+id).parents("tr").find("td.bold.sorting_1")[0].innerText;

        //se reinician lo checkbox
        $elemtCheck = $("tr").find("input[name=checkRow]");
        $.each(data, function(index, val) {
            if($elemtCheck[index].checked === true && val.id != targetID){
                $elemtCheck[index].checked = false}
        });

        // se carga el la data al modal dependiendo el target
        if(id.indexOf("coment") === 0){target = '#comments' , addComents(dataComments,targetID)}
        if(id.indexOf("time") === 0){target = '#addTime',addTimeExtend(data,targetID)}
        if(id.indexOf("dirc") === 0){target = '#address',addAddress(data,targetID)}
        if(isChecked === false){
            $("#"+id).parents("tr").find("input[name=checkRow]").prop("checked",true)
        }
        
        // se ajusta el modal   
        setTimeout(function(){
          if($(target).hasClass("in")){
             $(target).attr('style','margin-top: -316.5px;width: 50%;margin-left: -25%;display: block;');
          };
        }, 300);
    });

    $("input[id=accountGroup]").keypress(function(e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
    $("button.btn.btn-boo").on("click",function(){
        var hasChildren = $("ol[id=contentComments]").children().length
        if(hasChildren > 0){
            $("ol[id=contentComments]").empty();
            $("#userExtent").empty();
        }
    });
});

