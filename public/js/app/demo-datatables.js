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
                    [3, 'asc']
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
                    'sClass': 'text-right hidden-phone hidden-tablet',
                    'sType': 'eu_date'
                }, {
                    "aTargets": [4],
                    'sClass': 'text-right',
                    'sType': 'eu_date'
                }, {
                    "aTargets": [5],
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

        // var perfilC = "<span class='label label-success'>Contado</span>",
        //     perfilD = "<span class='label label-warning'>Credito</span>",
        //     statusA = "<span class='label label-info'>Activo</span>",
        //     statusS = "<span class='label label-danger'>Suspendido</span>",
        //     check = "<input type='checkbox' class='checkbox check-row' value='0' for='' name='checkRow'>"
        
        // var data = [
        // {
        //     id: "SIP-5423",
        //     customer: "Corporacion Platanera S.A",
        //     creacion: "04/08/2012",
        //     perfil: perfilC,
        //     estatus:statusA
        // },
        // {
        //     id: "SIP-55984",
        //     customer: "Hacienda Catalina S.A",
        //     creacion: "04/08/2012",
        //     perfil: perfilD,
        //     estatus: statusS
        // }];
        // $.each(data, function(index, val) {
        //     let id = val.id
        //     let cust = val.customer
        //     let date = val.creacion
        //     let profile = val.perfil
        //     let status = val.estatus

        //     $('table#customer').dataTable().fnAddData([
        //          check,
        //          id,
        //          cust,
        //          date,
        //          profile,
        //          status
        //     ]);
        // });
        

    });