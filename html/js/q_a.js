$(".answer-block .question").click(function (x) {
  x.preventDefault();
  var $this = $(this);
  if ($this.parent().hasClass("active")) {
    $this.parent().removeClass("active");
    $this.next().slideUp(349);
  } else {
    $this.parent().parent().find(".answer-block").removeClass("active");
    $this.parent().parent().find(".answer-block .answer").slideUp(349);
    $this.parent().toggleClass("active");
    $this.next().slideToggle(349);
  }
});
