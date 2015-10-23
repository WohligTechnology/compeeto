angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('EventCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('EventInnerCtrl', function($scope, $stateParams) {
});

.controller('RateCtrl', function($scope, $stateParams) {
});
