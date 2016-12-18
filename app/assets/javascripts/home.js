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
  $(".typewriterTxt").mouseover(function() {
    $(this).attr("fill", "maroon")
  });
  $(".typewriterTxt").mouseleave(function() {
    $(this).attr("fill", "initial")
  });


  $(".potatoTxt").mouseover(function() {
    $(this).attr("fill", "maroon")
    $(".potato").toggle();
  });
  $(".potatoTxt").mouseleave(function() {
    $(this).attr("fill", "initial")
    $(".potato").toggle();
  });


  $(".filmTxt").click(function() {
    $(".aboutInfoSVG").css("display", "none");
    $(".linkedInfo").css("display", "inline-block");
    $(".code-container").css("display", "none");
    $(".contact").css("display", "none");
    $(".film-container").toggle();
  });
  $(".filmTxt").mouseover(function() {
    $(this).attr("fill", "maroon")
  });
  $(".filmTxt").mouseleave(function() {
    $(this).attr("fill", "initial")
  });


  $(".codeTxt").click(function() {
    $(".aboutInfoSVG").css("display", "none");
    $(".linkedInfo").css("display", "inline-block");
    $(".film-container").css("display", "none");
    $(".contact").css("display", "none");
    $(".code-container").toggle();
  });
  $(".codeTxt").mouseover(function() {
    $(this).attr("fill", "maroon")
  });
  $(".codeTxt").mouseleave(function() {
    $(this).attr("fill", "initial")
  });


  $(".contactTxt").click(function() {
    $(".aboutInfoSVG").css("display", "none");
    $(".linkedInfo").css("display", "inline-block");
    $(".film-container").css("display", "none");
    $(".code-container").css("display", "none");
    $(".contact").toggle();
  });
  $(".contactTxt").mouseover(function() {
    $(this).attr("fill", "maroon")
  });
  $(".contactTxt").mouseleave(function() {
    $(this).attr("fill", "initial")
  });

});