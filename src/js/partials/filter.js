var posts = $(".filter__item");
var filterControl = $(".filter__control");

filterControl.on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("is-active").siblings().removeClass("is-active");
    var customType = $(this).data("filter");

    posts.hide();
    posts
        .filter(function (index) {
            var data_attr = $(this).data("category").split(" ");

            //  26-09-2018: Check if value exists in array...
            if (jQuery.inArray(customType, data_attr) !== -1) {
                return true;
            }
        })
        .show("500");
});
