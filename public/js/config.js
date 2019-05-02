$(document).ready(function() {
    $(document).on("click", ".module", function() {
        buttonCheck($(this))
    })
    $(document).on("click", ".sub", function() {
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
            if($($target).hasClass('active')){
                childrenButton.removeClass("active")
                $target.removeClass('active') 
            }else{
                $target.addClass('active')
                childrenButton.addClass("active")   
            }
            $disCheckBefore = $(parentNode).find("div.childrens").find("button.module").hasClass("active");
            $.each(childrenButton, function(k, v) {
                var parent = v.dataset.parent
                if (parent != $parentID) {
                    if ($disCheckBefore === false) {
                        $('#' + parent).removeClass('active')
                    }else{
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
                    $.each(items, function(v, k) {
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
});