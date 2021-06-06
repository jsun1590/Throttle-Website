$(document).ready(() => {
  $('#owl-sponsors').owlCarousel({
    items: 4,
    loop: true,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
  });
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
