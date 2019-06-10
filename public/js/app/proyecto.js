$(document).ready(function () {
    $(".mat-input").focus(function () {
        $(this).parent().addClass("is-active is-completed");
    });

    $(".mat-input").focusout(function () {
        if ($(this).val() === "")
            $(this).parent().removeClass("is-completed");
        $(this).parent().removeClass("is-active");
    })

    // selec2 tagging support demo  
    $(".selecttwo").select2({
        minimumResultsForSearch: 6
    });

    // $("#metaArticleKeywords").select2({
    //     tags: [],
    //     tokenSeparators: [","]
    // });

    var navListItems = $('ul.step-anchor li a'),
        allWells = $('.step-content');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li'),
            $navForDisabled;
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
            navForDisabled = $('ul.step-anchor  li')
            $.each(navForDisabled, function (k, m) {
                if (m.className.indexOf('active') <= 0) {
                    m.className = 'disabled';
                }
            })

        } else {
            navListItems.closest('li').removeClass('active');
            $item.removeClass('disabled').addClass('active');
            allWells.hide();
            $target.show();
            navForDisabled = $('ul.step-anchor  li')
            $.each(navForDisabled, function (k, m) {
                if (m.className != 'active') {
                    m.className = 'disabled';
                }
            })
        }


    });

    $('ul.step-anchor  li.active a').trigger('click');

    // DEMO ONLY //
    $('button').on('click', function (e) {
        var step = e.currentTarget.id === 'next' ? 1 : 2,
            elemt = $('ul.step-anchor li'),
            $target;
        if (step === 1) {
            $.each(elemt, function (k, v) {
                var l = v
                if (l.className.indexOf('active') > 0 || l.className === 'active') {
                    $target = l.children[0].hash
                    return false;
                }
            })

            if ($target === '#step-1') {
                let inputName = $('#proyectName').val(),
                    start = $('#step1Start').val(),
                    end = $("#end1Start").val();
                if (inputName === '' || start === '' || end === '') {
                    $('#alert').css({
                        'display': 'block'
                    })
                    setTimeout(function () {
                        $('#alert').css({
                            'display': 'none'
                        })
                    }, 1500)
                    return false
                } else {
                    // $('#down-button').css({
                    //     'margin-top': '-17px',
                    //     'margin-left': '-30px'
                    // })
                    //$('ul.setup-panel li a[href="#step-1"]').addClass('disabled');
                    $("#previous").removeClass("hidden")
                    $('ul.step-anchor li a[href="#step-2"]').trigger('click');

                    return false;
                }
            }
            if ($target === '#step-2') {
                var $categoryList = $('#cotegoryList button.btn'),
                    $categorySelect = false,
                    $catNofirst = false
                $.each($categoryList, function (k, l) {
                    if (l.classList[1] === 'active') {
                        if (l.id != "cat1") {
                            $catNofirst = true
                        }
                        $categorySelect = true
                        return false;
                    }
                })
                if ($categorySelect == false && $catNofirst == false) {
                    $('#alert2').css({
                        'display': 'block'
                    })
                    setTimeout(function () {
                        $('#alert2').css({
                            'display': 'none'
                        })
                    }, 1500)
                    return false
                } else {
                    if ($catNofirst == false) {
                        //$('ul.setup-panel li a[href="#step-2"]').addClass('disabled');
                        $('ul.step-anchor  li a[href="#step-3"]').trigger('click');
                        $(".sw-btn-group-extra").removeClass("hidden")
                        $("#next").addClass("hidden")
                        $("#rubroList").addClass('selectpicker');
                        $("#rubroList").selectpicker();
                        return false;
                    } else {
                        $(".sw-btn-group-extra").removeClass("hidden")
                        $("#next").addClass("hidden")
                    }

                }

            }
        }
    })

});


