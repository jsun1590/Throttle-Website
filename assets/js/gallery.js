$(document).ready(() => {
  lightGallery(document.getElementById('gallery-1'), {
    plugins: [lgZoom, lgShare, lgThumbnail],
  });

  var macy = Macy({
    container: '#gallery-1',
    waitForImages: false,
    margin: 24,
    columns: 3,
    breakAt: {
      1200: 5,
      940: 3,
      520: 2,
      400: 1
    }
  });


  $(".filter-group label").on("click", function() {
    var filtertag = $(this).attr('class').replace('btn btn-primary ', '');
    console.log(filtertag)
    $(`.gallery-item.${filtertag}`).fadeIn(0, function() {
      macy.recalculate(true, true);
    });
    $(`.gallery-item:not(.${filtertag})`).fadeOut(200, function() {
      macy.recalculate(true, true);
    });
  });

  $(window).on('resize', function() {
    macy.recalculate(true, true);
  });


});
