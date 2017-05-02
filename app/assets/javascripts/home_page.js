$(document).ready(function () {

  onScrollInit($('.animation'));

  $('.panel-heading').click(function () {
    var target = $(this).data("target");
    $(target).collapse('toggle');
  });
});

function onScrollInit(items) {
  items.each(function() {
    var element = $(this),
        animationDownAction = element.attr('data-animation-down-action');
        animationUpAction = element.attr('data-animation-up-action');

    element.waypoint(function(direction) {
        if(direction === "down") {
          element.addClass(animationDownAction);
          element.removeClass(animationUpAction);
        } else if(direction === "up") {
          element.addClass(animationUpAction);
          element.removeClass(animationDownAction);
        }
      }, { offset: '80%'});
  });
}
