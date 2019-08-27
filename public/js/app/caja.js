$(document).ready(function () {

        // DATATABLE CAJA
        // -------------------------------------------------------------------------------- * -->
        $('#DT')
                .dataTable({
                        iDisplayLength: 3,
                        sDom: "<'row-fluid' <'widget-header' <'span4'l> <'span8'<'table-tool-wrapper'><'table-tool-container'>> > > rti <'row-fluid' <'widget-footer' <'span6' <'table-action-wrapper'>> <'span6'p> >>"
                });
        $('#DT_length').css({ "display": "none" })



        // DATATABLE FACTURA
        // -------------------------------------------------------------------------------- * -->
     

        setTimeout(function () {
                var StartCaja = parseInt($("#startCashier").val())
                if (StartCaja === 0) {
                        $("#openCashier").modal("show")
                } else {
                        $(".openCashier").addClass("hidden")
                }
        }, 200)


        // SOLO PERMITE NUMEROS
        $("input[id*=num_]").keypress(function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                        return false;
                }
        });
        $(document).keypress("input[id*=numq_]",function (e) {
                if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                        return false;
                }
        });
});