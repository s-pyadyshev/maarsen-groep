function toggleMobileMenu(menu) {
    var mobileBtn = $(".js-toggle-menu");
    var mobileMenu = $(menu);
    var body = $("body");

    mobileBtn.on("click", function (e) {
        e.preventDefault();
        mobileMenu.toggleClass("is-active");
        body.toggleClass("mobile-menu-active");
        $(this).toggleClass("is-active");

        //  18-09-2018: 1st slider version...
        if ($(this).hasClass("is-active")) {
            $(".header__nav__container").slideDown();
        } else {
            $(".header__nav__container").slideUp();
        }
    });
}
