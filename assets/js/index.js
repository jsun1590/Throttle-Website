$(document).ready(() => {
  $('#owl-sponsors').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
  });

  $('video').each(function(){
    if ($(this).is(":not(:in-viewport)")) {
        $(this)[0].play();
    } else {
        $(this)[0].pause();
    }
  })
});

jQuery(document.documentElement).keyup(function (event) {
  var owl = jQuery(".owl-carousel");
  // handle cursor keys
  if (event.keyCode == 37) {
     // go left
     owl.trigger('prev.owl');
  } else if (event.keyCode == 39) {
     // go right
     owl.trigger('next.owl');
  }

});
