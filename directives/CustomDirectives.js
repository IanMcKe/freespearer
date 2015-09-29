freespearer.directive('debug', function($compile) {
  return {
    terminal: true,
    priority: 100000,
    link: function(scope, element) {
      var clone = element.clone();
      element.attr("style", "color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
  }
});


freespearer.directive('responsiveNav', function() {
  return {
    restrict:"E",
    scope: true,
    link: function(scope, element, attrs) {
      angular.element(document).ready(function() {
        var menuToggle = $('#js-mobile-menu').unbind();
        $('#js-navigation-menu').removeClass("show");

        menuToggle.on('click', function(event) {
          event.preventDefault();
          $('#js-navigation-menu').slideToggle(function(){
            if($('#js-navigation-menu').is(':hidden')) {
              $('#js-navigation-menu').removeAttr('style');
            }
          });
        });
      });
    }
  }
});

freespearer.directive('hoverAni', function() {
  return {
    restrict:"A",
    scope: true,
    link: function(scope, element, attrs) {
      element.bind('mouseover', function() {
        element.toggleClass("animated tada");
      });
    }
  }
});
