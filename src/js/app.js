$(document).ready(function () {
    @@include('partials/svg.js');
    @@include('partials/mobile-menu.js');
    toggleMobileMenu(".header__nav");
    @@include('partials/slider-main.js');
    @@include('partials/slider-project.js');
    @@include('partials/slider-filter.js');
    @@include('partials/filter.js');
    @@include('partials/slider-topical.js');
    @@include('partials/slider-news.js');
    @@include('partials/portfolio-tabs.js');
    @@include('partials/toggle.js');
    $('[data-toggle="tooltip"]').tooltip();
});
