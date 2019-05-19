$(document).ready(function () {
    // SECCION DE ROLE 
  
    $(document).on("click", ".module", function () {
        buttonCheck($(this))
    })
    $(document).on("click", ".sub", function () {
        buttonCheck($(this))
    })
    function buttonCheck(mrg) {
        $target = mrg,
            $parentID = $target.attr('data-parent');
        if ($parentID === 'parent') {
            var classButton = $target[0].classList[2],
                parentNode = $target.parentsUntil()[1],
                childrenButton = $(parentNode).find("button." + classButton),
                $disCheckBefore;
            if ($($target).hasClass('active')) {
                childrenButton.removeClass("active")
                $target.removeClass('active')
            } else {
                $target.addClass('active')
                childrenButton.addClass("active")
            }
            $disCheckBefore = $(parentNode).find("div.childrens").find("button.module").hasClass("active");
            $.each(childrenButton, function (k, v) {
                var parent = v.dataset.parent
                if (parent != $parentID) {
                    if ($disCheckBefore === false) {
                        $('#' + parent).removeClass('active')
                    } else {
                        $('#' + parent).addClass('active')
                    }
                }
            })
        } else {
            if (!$('#' + $parentID).hasClass('active')) {
                $('#' + $parentID).addClass('active')
                $target.addClass('active')
            } else {
                if (!$target.hasClass('active')) {
                    $target.addClass('active')
                } else {
                    var items = $target.parent().children();
                    var count = 0;
                    $.each(items, function (v, k) {
                        if (k.className.indexOf('active') > 0) {
                            count += 1;
                        }
                    })
                    if (count <= 1) {
                        $target.removeClass('active')
                        $('#' + $parentID).removeClass('active')
                    } else {
                        $target.removeClass('active')
                    }

                }
            }
        }

    }
$(".add").on("click",function(){
    $("#accountPrefix").val(rand_code(3, 7, ""))
})
    // SECCION DE USER

    $(".tbtn").click(function () {
        var elem = $(this)
        var parent = elem.parent().parent()[0]
        if(parent.nextSibling.className.indexOf("active") >= 0){
            parent.nextSibling.classList = "toggler"
        }else{
            parent.nextSibling.classList = "active"
        }
        // $(this).parents(".custom-table").find(".toggler1").removeClass("toggler1");
        // $(this).parents("tbody").find(".toggler").addClass("toggler1");
        // $(this).parents(".custom-table").find(".fa-minus-circle").removeClass("fa-minus-circle");
        // $(this).parents("tbody").find(".fa-plus-circle").addClass("fa-minus-circle");
    });
  // DATATABLE SETTINGS widgets-users.html
            // ------------------------------------------------------------------------------------------------ * -->
            $('#lastLogedTable')
                    .dataTable({
                        bAutoWidth: false,
                        oLanguage: {
                            sSearch: 'Global search:',
                            sLengthMenu: '_MENU_ to page',
                            sZeroRecords:"",
                            sEmptyTable:"",
                            oPaginate: {
                                sNext: '<i class="arrowicon-r-black"></i>',
                                sPrevious: '<i class="arrowicon-l-black"></i>'
                            }
                        },
                        iDisplayLength: 10,
                        aaSorting: [
                                [1, 'asc']
                        ],
                        aoColumnDefs: [{
                            "aTargets": [0],
                            'sWidth': '40px'
                        }, {
                            "aTargets": [1],
                            'sClass': 'hidden-phone'
                        }, {
                            "aTargets": [2],
                            'sClass': 'hidden-tablet hidden-phone'
                        }, {
                            "aTargets": [3]
                        }],
                        sDom: "<'row-fluid'<'widget-header'<'span6'l><'span6'f>>>rt<'row-fluid'<'widget-footer'<'span6'><'span6'p>>"
                    });

                    // DATATABLE exampleDT
				// -------------------------------------------------------------------------------- * -->
                /**/
                
                $('#exampleDT').dataTable({
                    oLanguage: {
                        sSearch: "",
                        sLengthMenu: "_MENU_ entries to page",
                        sZeroRecords: 'No record found <button class="btn btn-danger resetTable">Reset filter</button>'
                },
                iDisplayLength: 3,
                aaSorting: [
                        [1, 'asc']
                ],
                sPaginationType: 'full_numbers',
                sDom: "<'row-fluid' <'widget-header' <'span4'l> <'span8'<'table-reset-wrapper'>f<'table-tool-wrapper'> > > >  rt <'row-fluid' <'widget-footer' <'span12'p> >",
            });
            $('#exampleDT_wrapper .table-global-filter input')
            .attr("placeholder", "enter search terms");
            $('#exampleDT_length select').select2({
                minimumResultsForSearch: 5,
                width: "off"
            });
            // $('#exampleDT_wrapper .table-tool-wrapper')
            // .html($('#DTCF_toolBar')
            // .html());
    //   $("#btnAddUser").on("click",function(){
    //       $(this).parent().parent().addClass("fade")
    //       $("#newUser").addClass("in")
    //   })              
    

    // SELECT2 INPUT
    $('#equalizeContent').equalize({ children: '.equalize' });
    $('select.selectpicker').selectpicker();
    $("#newUsers").on("click",function(){
        $("#roleSelect").addClass("selectpicker")
        $("#roleSelect").selectpicker();
    })

}); 