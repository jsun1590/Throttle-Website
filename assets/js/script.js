
$(document).ready(() => {
  current_page = $('body').attr('id')+'.html';

  $(`.navbar-nav a[href$="${current_page}"]`).addClass('active');

  $(".hamburger").on("click", function() {
    $(this).toggleClass("is-active");
  });
});
