$(document).ready(function () {

    // FORM - CLEAR FIELD
    // ------------------------------------------------------------------------------------------------ * -->
    $.fn.clearicon = function (options) {
        // default settings
        var config = {
            "in": 'fadeIn',
            "out": 'fadeOut',
            "speed": 'fast',
            "css": {
                "right": "-3px",
                "top": "-5px"
            },
            "html": '<i class="fontello-icon-cancel-circle-2 opaci55"></i>',
            "click": function () {
                // general purposes functionality for clearing a field element
                $(this).val('').removeAttr('checked').removeAttr('selected').keyup();
            }
        };
        if (options) $.extend(config, options);
        // do the magic
        $(this).each(function () {
            // the current element
            var self = $(this);
            var ctr = $('<span style="position: relative; width:auto; overflow: hidden;" class="clear-icon-wrap"/>');
            $(this).wrap(ctr);
            var btn = $('<a style="position: absolute;" class="btn btn-glyph btn-link clear-icon-btn" href="javascript:;"/>');
            btn.css(config.css).html(config.html);
            self.after(btn);
            // handle clicking of button
            if (config.click) btn.click(function () {
                config.click.apply(self);
            });
            // handle value changes of input
            self.keyup(function () {
                if (self.val().length > 0) {
                    btn[config['in']](config.speed);
                } else {
                    btn[config['out']](config.speed);
                }
            });
            // trigger initial state
            self.keyup();
        });
        return this;
    };

    $('.clear-field').clearicon();
    $('.clear-textarea').clearicon({
        'css': {
            'right': '-3px',
            'top': '0'
        },
    });
 $(document).on("click",".module",function(){
    buttonCheck($(this))
 })
  function buttonCheck(mrg){
    $target = mrg,
    $parentID = $target.attr('data-parent');
    if($parentID === 'parent'){
      var classButton = $target[0].classList[2],
      parentNode = $target.parentsUntil()[1],
      childrenButton = $(parentNode).find("button."+classButton);
      $disCheck = $(parentNode).find("button.active").length;
      $delete = false
      $.each(childrenButton,function(k,v){
         var parent = v.dataset.parent
         if(parent != $parentID){
             if($disCheck === 0){
                $('#'+parent).addClass('active')
             }
             if($disCheck === 7){
                $('#'+parent).removeClass('active')
                $delete = true
             }
         }
      })
      if($delete === false){
        childrenButton.addClass("active")
        $target.addClass('active')
      }else{
        childrenButton.removeClass("active")
        $target.removeClass('active')
      }
      
    }else{
     if(!$('#'+$parentID).hasClass('active')){
        $('#'+$parentID).addClass('active')
        $target.addClass('active')
    }else{
        if(!$target.hasClass('active')){
             $target.addClass('active')
        }else{
            var items = $target.parent().children();
            var count = 0;
            $.each(items,function(v,k){
                if(k.className.indexOf('active') > 0){
                  count += 1;
                }
            })
            if(count <= 1){
                $target.removeClass('active')
                $('#'+$parentID).removeClass('active')
            }else{
                $target.removeClass('active')
            }
            
        }
    }   
    }
    
  }  
});