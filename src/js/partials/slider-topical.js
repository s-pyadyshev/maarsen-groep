var sliderTopical = new Swiper(".js-slider-topical", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: false,

    pagination: {
        el: ".js-slider-topical-pagination",
        clickable: true,
    },

    breakpoints: {
        1279: {
            spaceBetween: 30,
            slidesPerView: 2,
        },

        1023: {
            spaceBetween: 20,
            slidesPerView: 2,
        },

        767: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
    },
});
