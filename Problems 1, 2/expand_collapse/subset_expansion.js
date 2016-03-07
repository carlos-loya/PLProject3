$(document).ready(function() {
    $("a").click(function() {
        $(this).prev().toggleClass("hide");
        if ($(this).text() == "Show more") {
            $(this).text("Show less");
        }
        else {
            $(this).text("Show more");
        }
    })
})


