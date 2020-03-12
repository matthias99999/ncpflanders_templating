$(document).ready(function () {

    //--------------------------- bottom to top button
var btn = $('#toTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//---------------------------------- dropdown

$("#dropdown-btn").click(function(){

    $(".dropdown-lijst").toggleClass("hidden");
    
    });
    
    


});