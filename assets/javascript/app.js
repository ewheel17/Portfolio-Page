$("#navTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-top").offset().top - 50
    }, 800);
});

$("#portTab").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 100
    }, 800);
});

$("#aboutTab").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 80
    }, 800);
});
