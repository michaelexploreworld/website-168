jsManagement.home_page = createHomePageController();

function createHomePageController() {
  return {
    index: function () {
      // Resize sections
      adjustWindow();

      enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);

      initScrollSpy();
    }
  };
}

function adjustWindow() {
  $window = $(window);
	$slide = $('.homeSlide');

  // Get window size
  winH = $window.height();
  winW = $window.width();

  // Keep minimum height 550
  if(winH <= 550) {
      winH = 550;
  }

  // Init Skrollr for 768 and up
  if(winW >= 768) {
    // Init Skrollr
    var s = skrollr.init({
        forceHeight: false
    });

    // Resize our slides
    $slide.height(winH);

    s.refresh($slide);
  } else {
    // Init Skrollr
    var s = skrollr.init();
    s.destroy();
  }

  // Check for touch
  if(Modernizr.touch) {
    // Init Skrollr
    var s = skrollr.init();
    s.destroy();
  }
}

function initAdjustWindow() {
  return {
    match : function() {
      adjustWindow();
    },
    unmatch : function() {
      adjustWindow();
    }
  };
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
