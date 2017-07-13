jsManagement.home_page = createHomePageController();

function createHomePageController() {
  return {
    index: function () {
      adjustWindow();

      initScrollSpy();
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
