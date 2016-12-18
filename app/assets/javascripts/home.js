document.addEventListener("turbolinks:load", function() {

  $('.harlotSVG').mouseover(function() {
    $('path').attr("stroke", "maroon");
  });
  $('.harlotSVG').mouseleave(function() {
    $('path').attr("stroke", "black");
  });
  $('.harlotSVG').click(function() {
    $('.aboutInfoSVG').toggle();
  });


  $(".harlotContainer").on("click", function() {
    $('.harlotContainer').css("display", "inline-block");
    $(".aboutInfoSVG").attr("display", "initial");
  });

  $(".typewriterTxt").click(function() {
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
    $(".aboutInfoSVG").css("display", "none");
    $(".linkedInfo").css("display", "inline-block");
    $(".code-container").css("display", "none");
    $(".contact").css("display", "none");
    $(".film-container").toggle();
  });

  $(".codeTxt").mouseover(function() {
    $(".aboutInfoSVG").css("display", "none");
    $(".linkedInfo").css("display", "inline-block");
    $(".film-container").css("display", "none");
    $(".contact").css("display", "none");
    $(".code-container").toggle();
  });

  $(".contactTxt").mouseover(function() {
    $(".aboutInfoSVG").css("display", "none");
    $(".linkedInfo").css("display", "inline-block");
    $(".film-container").css("display", "none");
    $(".code-container").css("display", "none");
    $(".contact").toggle();
  });

});