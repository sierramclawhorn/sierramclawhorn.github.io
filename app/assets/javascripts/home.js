document.addEventListener("turbolinks:load", function() {
  $(".harlotSVG").mouseenter(function() {
    $('path').attr("stroke", "maroon");
    $(".aboutInfoSVG").attr("display", "initial");
  });
  $(".harlotSVG").mouseleave(function() {
    $('path').attr("stroke", "black");
  });

  $(".typewriterTxt").mouseover(function() {
    // $(".aboutInfoSVG").toggle();
    // $(".type").toggle();
    // INSERT TYPE THING!
  });

  $(".potatoTxt").mouseover(function() {
    $(".potato").toggle();
  });
  $(".potatoTxt").mouseleave(function() {
    $(".potato").toggle();
  });

  $(".filmTxt").mouseover(function() {
    $(".potato").toggle();
  });


});