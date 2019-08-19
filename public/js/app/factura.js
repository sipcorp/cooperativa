$(document).ready(function () {
    $("#showSideBar").on("click", function () {
        if ($("body").hasClass("sidebar-hidden")) {
            $("body").removeClass("sidebar-hidden")
        } else {
            $("body").addClass("sidebar-hidden")
        }

    })
});