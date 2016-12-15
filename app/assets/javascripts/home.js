document.addEventListener("turbolinks:load", function() {
  $(".harlotSVG").mouseenter(function() {
    $(".aboutInfo").toggle();
  });
  $(".harlotSVG").mouseleave(function() {
    $(".aboutInfo").toggle();
  });
});