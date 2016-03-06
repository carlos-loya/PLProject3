$(document).ready(function() {

    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    })

    $("#image_list a").click(function(evt) {
        var newSrc = $(this).attr("href");
        $("#image").attr("src", newSrc);

        var caption = $(this).attr("title");
        $("#caption").text(caption);

        evt.preventDefault();
    })

    $("li:first-child a").focus();
})