jsManagement.home_page = createHomePageController();

function createHomePageController() {
  return {
    index: function () {
      adjustWindow();

      initScrollSpy();

      onScrollInit($('.animation'));

      searchSubwebsite();
    }
  };
}

function adjustWindow() {
  $window = $(window);
  $slide = $('.homeSlide');

  // Init Skrollr
  var s = skrollr.init({
    render: function(data) {
      //Debugging - Log the current scroll position.
      //console.log(data.curTop);
    }
  });

  // Get window size
  winH = $window.height();

  // Resize our slides
  $slide.height(winH);

  // Refresh Skrollr after resizing our sections
  s.refresh($('.homeSlide'));
}

function initScrollSpy() {
  $('body').scrollspy({target: ".navbar", offset: 50});

  $("#menuList a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {
        window.location.hash = hash;
      });
    }
  });
}

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

function searchSubwebsite() {
  $('#searchBox').on("input", function(){
    var userInput = $(this).val();
    var $searchStyle = $('#searchStyle');

    if(!userInput) {
      $searchStyle.html("");
    } else {
      $searchStyle.html('.subwebsite-item:not([data-keyword*="' + userInput.toLowerCase() + '"]) {display: none;}');
    }
  });
};
