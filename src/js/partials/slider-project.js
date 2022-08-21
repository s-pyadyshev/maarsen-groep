var sliderProject = new Swiper ('.js-slider-project', {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,

    pagination: {
        el: '.js-slider-project-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.js-slider-project-next',
        prevEl: '.js-slider-project-prev',
    },

    breakpoints: {
        1279: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        
        1023: {
            spaceBetween: 20,
            slidesPerView: 1,
        },
        
        767: {
            spaceBetween: 20,
            slidesPerView: 1,
        }
    }
})