$(function () {
  // Scroll To Top Button
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
      $(".scroll").fadeIn(400);
    } else {
      $(".scroll").fadeOut(400);
    }
  });
  $(".scroll").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
  // The Preloader
  $(window).on("load", function () {
    $("#preloader").delay(5000).fadeOut("slow");
    $("body").delay(3000).css("ovelflow", "visible");
  });
});
