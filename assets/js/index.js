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

  $(document).on('click', '.download-lyrics', function() {
  	var x = new XMLHttpRequest();
  	x.open("GET", "assets/cities_lyrics.docx", true);
  	x.responseType = 'blob';
  	x.onload = function(e){
      download(x.response, "Cities_Acoustic_Lyrics");
  	}
  	x.send();
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
