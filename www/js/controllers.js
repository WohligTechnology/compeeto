angular.module('starter.controllers', [])

.controller('LoginCtrl', function ($scope, $ionicModal, $timeout) {

})

.controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

})

.controller('EventCtrl', function ($scope) {
    $scope.event = [{
            id: 1,
            name: "Event1",
            date: "22/10/2015",
            status: true
},
        {
            id: 2,
            name: "Event2",
            date: "23/10/2015",
            status: true
},
        {
            id: 3,
            name: "Event3",
            date: "24/10/2015",
            status: true
}];
})

.controller('EventInnerCtrl', function ($scope, $stateParams) {
    $scope.users = [{
        id: 1,
        name: 'Rohan',
        ratingStatus: true,
        rating: 6
}, {
        id: 2,
        name: 'Sohan',
        ratingStatus: true,
        rating: 9
}, {
        id: 3,
        name: 'Tushar',
        ratingStatus: true,
        rating: 10
}, {
        id: 4,
        name: 'Amit',
        ratingStatus: true,
        rating: 9
}];
})

.controller('RateCtrl', function ($scope, $stateParams) {});