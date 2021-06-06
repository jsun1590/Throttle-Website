//Dynamic tab activator for navbar
$(document).ready(() => {
    current_page = $('body').attr('id')+'.html';
    console.log(current_page);
    $(`.navbar-nav a[href$="${current_page}"]`).addClass('active');
});

