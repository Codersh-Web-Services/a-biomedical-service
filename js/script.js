(function ($) {
  $(function () {
    $('nav ul li a:not(:only-child)').click(function (e) {
      $(this).siblings('.nav-dropdown').toggle();
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    $('html').click(function () {
      $('.nav-dropdown').hide();
    });
    $('#nav-toggle').click(function () {
      $('nav ul').slideToggle();
    });
    $('#nav-toggle').on('click', function () {
      this.classList.toggle('active');
    });
  });
})(jQuery);



$(function () {

  var logosSlider = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    loop: true,
    simulateTouch: false,
    allowTouchMove: false,
    preventClicksPropagation: true,
    preventClicks: true,
    a11y: false,
    freeMode: true,
    speed: 11000,
    autoplay: {
      delay: 0.5,
      disableOnInteraction: false,
    },
    pagination: '.swiper-pagination',
    breakpoints: {
      340: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
});
