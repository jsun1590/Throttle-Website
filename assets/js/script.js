
$(document).ready(() => {
  current_page = $('body').attr('id')+'.html';

  $(`.navbar-nav a[href$="${current_page}"]`).addClass('active');

  $(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
  });

  $('.language-menu a').click(function(){
    $('.language').html('<i class="fas fa-globe"></i>' + $(this).text())
  })
});
