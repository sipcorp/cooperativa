$(document).ready(function () {

    // DATATABLE CAJA
    // -------------------------------------------------------------------------------- * -->
    $('#DT')
        .dataTable({
            iDisplayLength: 3,
            sDom: "<'row-fluid' <'widget-header' <'span4'l> <'span8'<'table-tool-wrapper'><'table-tool-container'>> > > rti <'row-fluid' <'widget-footer' <'span6' <'table-action-wrapper'>> <'span6'p> >>"
        });
    $('#DT_length').css({"display":"none"})


    
				// DATATABLE FACTURA
				// -------------------------------------------------------------------------------- * -->
        		$('#DTA')
                        .dataTable({
                        oLanguage: {
                                sSearch: 'Global search:',
                                sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>',
                                oPaginate: {
                                        sNext: '<i class="arrowicon-r-black"></i>',
                                        sPrevious: '<i class="arrowicon-l-black"></i>'
                                }
                        },
                        iDisplayLength: 10,
                        aaSorting: [
                                [0, 'desc']
                        ],
                        aoColumnDefs: [{
                            "aTargets": [0],
                            'bSortable': false
                    }, {
                            "aTargets": [1],
                            'sClass': 'bold',
                    }, {
                            "aTargets": [2],
                            'sClass': 'hidden-phone hidden-tablet'
                    }, {
                            "aTargets": [3],
                    }, {
                            "aTargets": [4],
                            'sClass': 'text-right'
                    }],
                        sDom: "<'row-fluid'<'widget-header'<'span6'l><'span6'f>>>rt<'row-fluid'<'widget-footer'<'span6'><'span6'p>>"

                });
				$('#DTA_length select').select2({
						minimumResultsForSearch: 6,
						width: "off"
				});

});