var sliderProject = new Swiper(".js-slider-news", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    spaceBetween: 50,
    loop: false,

    pagination: {
        el: ".js-slider-news-pagination",
        clickable: true,
    },

    breakpoints: {
        1280: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            spaceBetween: 30,
        },

        768: {
            spaceBetween: 50,
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
    },
});
