// Initialize Firebase
var config = {
    apiKey: "AIzaSyCtBuyV-RTxNpqbC99Qp2HbXBE0JYfVrnk",
    authDomain: "portfolio-site-82e35.firebaseapp.com",
    databaseURL: "https://portfolio-site-82e35.firebaseio.com",
    projectId: "portfolio-site-82e35",
    storageBucket: "portfolio-site-82e35.appspot.com",
    messagingSenderId: "266605929586"
  };
  firebase.initializeApp(config);


$("#navTop").click(function() {
    $('html, body').animate({
        scrollTop: $("#page-top").offset().top - 50
    }, 800);
});

$("#portTab").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio").offset().top - 130
    }, 800);
});

$("#aboutTab").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top - 80
    }, 800);
});
