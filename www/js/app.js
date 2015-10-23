angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
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
    url: '/event/inner',
    views: {
      'menuContent': {
        templateUrl: 'templates/event-inner.html',
        controller: 'EventInnerCtrl'
      }
    }
  })

  .state('app.rate', { // Tushar
    url: '/event/inner/rate',
    views: {
      'menuContent': {
        templateUrl: 'templates/event-rate.html',
        controller: 'RateCtrl'
      }
    }
  })
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/event');
});
