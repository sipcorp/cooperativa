$('#exampleDT')
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

                        fnFooterCallback: function (nRow, aaData, iStart, iEnd, aiDisplay) {
                                var iPageSum = 0;
                                for(var i = iStart; i < iEnd; i++) {
                                        iPageSum += aaData[aiDisplay[i]][5] * 1;
                                }
                                var nCells = nRow.getElementsByTagName('th');
                                nCells[5].innerHTML = parseInt(iPageSum * 100) / 100;
                        }
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
                        }]
                });
                // inject to datatable DTCF
                $('#exampleDT_wrapper .table-tool-wrapper')
                        .html($('#DTCF_toolBar')
                        .html());
                $('#exampleDT_wrapper .table-action-wrapper')
                        .html($('#DTCF_actionTable')
                        .html());
				
				$('#exampleDT_length select').select2({
						minimumResultsForSearch: 6,
						width: "off"
				});

$('#exampleDT_wrapper .table-global-filter input')
.attr("placeholder", "enter search terms");
