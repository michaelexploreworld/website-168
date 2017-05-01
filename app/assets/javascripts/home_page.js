$(document).ready(function () {

  onScrollInit($('.animation'));

  $('.panel-heading').click(function () {
    var target = $(this).data("target");
    $(target).collapse('toggle');
  });
});

function onScrollInit(items, trigger) {
  items.each(function() {
    var element = $(this),
        animationClass = element.attr('data-animation'),
        animationDelay = element.attr('data-animation-delay');

    element.css({
      '-webkit-animation-delay': animationDelay,
      '-moz-animation-delay':    animationDelay,
      'animation-delay':         animationDelay
    });

    var elementTrigger = (trigger) ? trigger : element;

    elementTrigger.waypoint(function() {
      element.addClass('animated').addClass(animationClass);
      },{
          offset: '90%'
    });
  });
}
