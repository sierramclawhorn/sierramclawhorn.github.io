document.addEventListener("turbolinks:load", function() {

  $('.harlotSVG').mouseover(function() {
    $('path').attr("stroke", "maroon");
  });
  $('.harlotSVG').mouseleave(function() {
    $('path').attr("stroke", "black");
  });


  $(".harlotContainer").on("click", function() {
    $('.harlotContainer').css("display", "inline-block");
    $(".aboutInfoSVG").attr("display", "initial");
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
    $(".code-container").css("display", "none");
    $(".contact").css("display", "none");
    $(".film-container").toggle();
  });

  $(".codeTxt").mouseover(function() {
    $(".film-container").css("display", "none");
    $(".contact").css("display", "none");
    $(".code-container").toggle();
  });

  $(".contactTxt").mouseover(function() {
    $(".film-container").css("display", "none");
    $(".code-container").css("display", "none");
    $(".contact").toggle();
  });

});