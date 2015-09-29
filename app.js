var freespearer = angular.module('freespearer', ['ui.router']);

freespearer.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl:"partials/home.html"
      },
      'footer': {
        templateUrl: "partials/footer.html",
        controller: "FootersCtrl"
      }
    }
  });

  $stateProvider.state('test', {
    url: "test",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/test.html"
      },
      'footer': {
        templateUrl: "partials/footer.html",
        controller: "FootersCtrl"
      }
    }
  });

  $stateProvider.state('contact-us', {
    url: "contact-us",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/contact-us.html"
      },
      'footer': {
        templateUrl: "partials/footer.html",
        controller: "FootersCtrl"
      }
    }
  });

  $stateProvider.state('about-us', {
    url: "about-us",
    views: {
      'header': {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      'body': {
        templateUrl: "partials/about-us.html"
      },
      'footer': {
        templateUrl: "partials/footer.html",
        controller: "FootersCtrl"
      }
    }
  });
});
