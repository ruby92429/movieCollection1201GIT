$(window).scroll(function (evt) {
  if ($(window).scrollTop() > 0) $(".navbar").removeClass("navbar-show");
  else $(".navbar").addClass("navbar-show");
});

var s = skrollr.init();
