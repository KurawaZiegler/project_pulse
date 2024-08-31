
$(document).ready(function(){
  $('.carousel__inner').slick({
    // adaptiveHeight: true,
    infinite: true,
    speed: 1000,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left_ar.png" alt="arrow"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_ar.png" alt="arrow"></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: true,
          arrows: false
        } 
      }
    ]
  });
});
		