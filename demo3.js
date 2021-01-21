if ($('.header-hero').length > 0){


  var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    mousewheel: false,
    speed: 1800,
    scrollbar: {
        container: '.swiper-scrollbar',
        hide: false,
        draggable: false,
        snapOnRelease: false
    },
    keyboard: {
        enabled: true,
      },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    allowTouchMove: false,
  });

}



if ($('.module-team').length > 0){


  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.4,
    slidesPerGroup: 1,
   // loop: true,
    loopFillGroupWithBlank: true,
    spaceBetween: '10%',
    speed:1000,
    centeredSlides: false,
    grabCursor: true,
    //init: false,
    breakpoints: {
      1200: {
        spaceBetween: 50,
        slidesPerView: 1.4,
      },
      1024: {
        spaceBetween: 40,
        slidesPerView: 1.4,
      },
      800: {
        spaceBetween: 30,
        slidesPerView: 1.4,
      },
      580: {
        spaceBetween: '20%',
        slidesPerView: 1.3,
        centeredSlides: true,
      }
    }
  });



}

