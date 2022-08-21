function toggleScrollToTop() {
    var btnTop = document.querySelector('.js-scroll-to-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            btnTop.classList.add('is-active');
        } else {
            btnTop.classList.remove('is-active');
        }
    });

    function scrollToTop() {
        if (window.scrollY != 0) {
            window.scrollTo(0, 0);
        }
    }

    btnTop.addEventListener('click', function (event) {
        event.preventDefault();
        scrollToTop();
    });
};
