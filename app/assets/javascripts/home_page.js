jsManagement.home_page = createHomePageController();

function createHomePageController() {
  return {
    index: function () {
      initScrollSpy();

      onScrollInit($('.animation'));

      $('.panel-heading').click(function () {
        var target = $(this).data("target");
        $(target).collapse('toggle');
      });

      searchSubwebsite();
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
  $('#searchBox').on('input', function() {
    var userInput = $(this).val();

    if(userInput === "") {
      $('.subwebsite-item').removeClass("hide-subwebsite-item");
    } else {
      $('.subwebsite-item').not("[data-keyword*=\"" + userInput.toLowerCase() + "\"]").addClass("hide-subwebsite-item");
    }
  });
};
