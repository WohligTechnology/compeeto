angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
		if (window.StatusBar) {
			StatusBar.overlaysWebView(true);
			StatusBar.styleLightContent();
		}
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider, $ionicConfigProvider) {
  $ionicConfigProvider.views.maxCache(0);
  $httpProvider.defaults.withCredentials = true;
  $stateProvider

    .state('login', { // Mahesh
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.event', { // Amit
    url: '/event',
    views: {
      'menuContent': {
        templateUrl: 'templates/event.html',
        controller: 'EventCtrl'
      }
    }
  })

  .state('app.eventinner', { // Sohan
    url: '/event/inner/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/event-inner.html',
        controller: 'EventInnerCtrl'
      }
    }
  })

  .state('app.rate', { // Tushar
    url: '/event/innerrate/:events/:participant/:name',
    views: {
      'menuContent': {
        templateUrl: 'templates/event-rate.html',
        controller: 'RateCtrl'
      }
    }
  })

	.state('app.rate2', { // Tushar
    url: '/event/innerrate2/:participant/:name',
    views: {
      'menuContent': {
        templateUrl: 'templates/event-rate2.html',
        controller: 'RateCtrl2'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/event');
});

var formvalidation = function(allvalidation) {
  var isvalid2 = true;
  for (var i = 0; i < allvalidation.length; i++) {
    if (allvalidation[i].field == "" || !allvalidation[i].field) {
      allvalidation[i].validation = "ng-dirty";
      isvalid2 = false;
    } else {
      allvalidation[i].validation = "";
    }
  }
  return isvalid2;
}
