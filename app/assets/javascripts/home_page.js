// Global variable used to store page state
var currentState = {
  section: "#home_page",
  pageUrl: null
};

jsManagement.home_page = createHomePageController();

function createHomePageController() {
  return {
    index: function () {
      // Resize sections
      adjustWindow();

      enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);

      initScrollSpy();
      searchScrollSpy();
      bindPopstate();
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

function requestContent(state) {
  var loaderSpinnerHtml = "<div class='loader'></div>";
  var url;

  $('#websites_container').html(loaderSpinnerHtml);
  if(state.pageUrl === null) {
    url = "/";
  } else {
    url = state.pageUrl;
  }
  return $.ajax(url, { dataType: "script" });
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

      });
    }
  });

  $(".navbar").on("activate.bs.scrollspy", function() {
    var url;

    currentState.section = $('.nav li.active > a').attr('href');
    if(currentState.pageUrl === null) {
      url = currentState.section;
    } else {
      url = currentState.section + currentState.pageUrl;
    }
    window.history.replaceState(currentState, window.title, url);
  });
}
function searchScrollSpy() {
  $('body').scrollspy({target: ".navbar", offset: 50});

  $("#home-section button").on('click', function(event) {
    if (this.hash !== "") {
      $(this).submit();
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $("#subwebsite-section").offset().top
      }, 800, function() {

      });
    }
  });
}
function bindPopstate() {
  window.history.replaceState("root", window.title, null);

  window.addEventListener('popstate', function(e) {
    var character = e.state;

    if (character === "root") {
      window.location.replace("/");
    } else if (character !== null ){
      requestContent(character)
      .fail(function() {
        var failHtml = "<div class='alert alert-danger' role='alert'><strong>頁面讀取失敗!</strong> 請重新刷新頁面。</div>";
        $('#websites_container').html(failHtml);
      });
    }
  });
}
