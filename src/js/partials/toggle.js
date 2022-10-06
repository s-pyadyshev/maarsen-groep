var historyMore = $(".history__more");

if (historyMore.length) {
    historyMore.on("click", function () {
        $(this)
            .parents(".history__wrap")
            .next(".history__detail")
            .toggle(300)
            .toggleClass("is-open");
        $(this).toggleClass("is-open");
    });
}
