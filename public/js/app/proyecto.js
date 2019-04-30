$(document).ready(function() {
    // selec2 tagging support demo  
    $("#metaArticleKeywords").select2({
        tags: [],
        tokenSeparators: [","]
    });

    var navListItems = $('ul.setup-panel li a'),
        allWells = $('.setup-content');

    allWells.hide();

    navListItems.click(function(e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this).closest('li'),
            $navForDisabled;
        if (!$item.hasClass('disabled')) {
            navListItems.closest('li').removeClass('active');
            $item.addClass('active');
            allWells.hide();
            $target.show();
            navForDisabled = $('ul.setup-panel li')
            $.each(navForDisabled, function(k, m) {
                if (m.className != 'active') {
                    m.className = 'disabled';
                }
            })

        } else {
            navListItems.closest('li').removeClass('active');
            $item.removeClass('disabled').addClass('active');
            allWells.hide();
            $target.show();
            navForDisabled = $('ul.setup-panel li')
            $.each(navForDisabled, function(k, m) {
                if (m.className != 'active') {
                    m.className = 'disabled';
                }
            })
        }
    });
   
    $('ul.setup-panel li.active a').trigger('click');

    // DEMO ONLY //
    $('button').on('click', function(e) {
        var step = e.currentTarget.id === 'next' ? 1 : 2,
            elemt = $('ul.setup-panel li'),
            $target;
        if (step === 1) {
            $.each(elemt, function(k, v) {
                var l = v
                if (l.className === 'active') {
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
                    setTimeout(function() {
                        $('#alert').css({
                            'display': 'none'
                        })
                    }, 1500)
                    return false
                } else {
                    $('#down-button').css({
                        'margin-top': '-17px',
                        'margin-left': '-30px'
                    })
                    //$('ul.setup-panel li a[href="#step-1"]').addClass('disabled');
                    $('ul.setup-panel li a[href="#step-2"]').trigger('click');
                    
                    return false;
                }
            }
            if ($target === '#step-2') {
                var $categoryList = $('#cotegoryList button.btn'),
                    $categorySelect = false
                $.each($categoryList, function(k, l) {
                    if (l.classList[1] === 'active') {
                        $categorySelect = true
                        return false;
                    }
                })
                if ($categorySelect == false) {
                    $('#alert2').css({
                        'display': 'block'
                    })
                    setTimeout(function() {
                        $('#alert2').css({
                            'display': 'none'
                        })
                    }, 1500)
                    return false
                } else {
                    //$('ul.setup-panel li a[href="#step-2"]').addClass('disabled');
                    $('ul.setup-panel li a[href="#step-3"]').trigger('click');
                    $('#down-button').css({'display':'none'})
                    $('.up-button').css({'display':'block'})
                    $("#rubroList").addClass('selectpicker');
                    $("#rubroList").selectpicker();
                    return false;
                }

            }
        }
    })

});