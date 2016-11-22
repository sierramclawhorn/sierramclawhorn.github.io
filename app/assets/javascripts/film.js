$(document).on('turbolinks:load', function() {
  aniKen();
  kenHoverListener();
});

var aniKen = function() {
  $('.kenjamin').addClass('animated pulse');
};


var kenHoverListener = function() {
  $('.kenjamin').hover(
    function() {
      $( this ).addClass( 'animated lightSpeedOut' );
    }
)};