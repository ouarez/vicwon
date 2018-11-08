$(function() {

$('.slider').bxSlider({
  pager: false
});

  $("#toggle").click(function() {
    if ($("#hidden").is(":hidden")) {
      $("#hidden").slideDown();
      $("i").toggleClass('fa-caret-right fa-caret-down');
      return;
    }
    if ($("#hidden").is(":visible")) {
      $("#hidden").slideUp();
      $("i").toggleClass('fa-caret-down fa-caret-right');
      return;
    }

  });

  if ($("#toggle").hasClass("active")) {
    if ($("#hidden").is(":hidden")) {
      $("#hidden").show();
      $("i").toggleClass('fa-caret-right fa-caret-down');
      return;
    }
  }

});
