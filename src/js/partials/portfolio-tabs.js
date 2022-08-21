$(document).ready(function () {
  $(document).on('click', '.js-portfolio-tab', function () {
    if (!($(this).hasClass('disabled'))) {
      $('.js-portfolio-tab').removeClass('active');
      $(this).addClass('active');
      $('.js-portfolio-content').removeClass('show');
      $('.js-portfolio-content[data-tab=' + $(this).attr('data-tab') + ']').addClass('show');
    }
  });
});