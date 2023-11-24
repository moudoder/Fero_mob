$(document).ready(function () {
  

  if ($(window).width() > 767) {
      $('.advantages-slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.advantages-prev'),
        nextArrow: $('.advantages-next')
      });
  }

  $(".phone").mask("+7 (999) 999-9999");

  $('.look-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.look-prev'),
    nextArrow: $('.look-next'),
    centerMode: true,
    variableWidth: true,
    responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
          }
        }
      ]
  });

  $('.questions-item').on('click', function() {
    $(this).toggleClass('visible');
    return false;
  })
})