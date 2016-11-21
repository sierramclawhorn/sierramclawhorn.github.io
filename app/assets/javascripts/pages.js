$(document).on('turbolinks:load', function() {
  aniName();
});

var aniName = function() {
  $('.name-img').addClass('animated zoomInDown');
};