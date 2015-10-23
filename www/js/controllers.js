angular.module('starter.controllers', ['starter.services'])

.controller('LoginCtrl', function($scope, $ionicModal, $timeout, MyServices, $ionicPopup, $location) {
  $scope.loginData = [];
  $.jStorage.flush();
  if (MyServices.getUser()) {
    $location.url("/app/event");
  }
  $scope.doLogin = function() {
    console.log($scope.loginData);
    MyServices.signin($scope.loginData, function(data) {
      if (data == "false" || data == "0" || data == 0) {
        var myPopup = $ionicPopup.show({
          template: '<p class="text-center">User not exist</p>',
          title: 'Login!',
          scope: $scope,

        });
        $timeout(function() {
          myPopup.close(); //close the popup after 3 seconds for some reason
        }, 2000);
      } else {
        MyServices.setUser(data);
        var myPopup = $ionicPopup.show({
          template: '<p class="text-center">Login successfully</p>',
          title: 'Login!',
          scope: $scope,

        });
        $timeout(function() {
          myPopup.close(); //close the popup after 3 seconds for some reason
          $location.url("/app/event");
        }, 2000);
      }
    }, function(err) {
      console.log(err);
    })
  }

})

.controller('AppCtrl', function($scope, $ionicModal, $timeout, MyServices, $location) {
  console.log("app crl");
  if (!MyServices.getUser()) {
    $location.url("/login");
  }
})

.controller('EventCtrl', function($scope, MyServices, $stateParams) {
  //	MyServices.getEvent();
  $scope.pageno = 1;
  $scope.event = [];
  $scope.keepscrolling = true;
  $scope.loadEvent = function(pageno) {
    MyServices.getEvents(pageno, function(data) {
      if (data.queryresult != '') {
        _.each(data.queryresult, function(n) {
          $scope.event.push(n);
        });
      } else {
        $scope.keepscrolling = false;
      }
    }, function(err) {
      console.log(err);
    });

    $scope.$broadcast('scroll.infiniteScrollComplete');
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.loadMoreNotification = function() {
    $scope.loadEvent(++$scope.pageno);
  }
  $scope.loadEvent(1);

})

.controller('EventInnerCtrl', function($scope, $stateParams, MyServices, $stateParams) {

  $scope.event = {};
  $scope.eventname = $stateParams.event;

  MyServices.getEventDetail($stateParams.id, function(data) {
    console.log(data);
    $scope.event = data;
    if (data.detail.status == "3") {

      $scope.event.participant = _.sortBy($scope.event.participant, function(n) {
        return -1 * parseFloat(n.score);
      });

    }
  });

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


.controller('RateCtrl', function($scope, $stateParams, MyServices, $ionicPopup, $location, $timeout) {

  $scope.name = $stateParams.name;
  $scope.form = {
    comment: "",
    score: -1
  };

  $scope.postRate = function(form) {
    MyServices.postScore($stateParams.participant, form.score, form.comment, function(data) {
      $scope.event = data;
    });
    var myPopup = $ionicPopup.show({
      template: 'Rated Successfully',
      title: 'Rated!',
      scope: $scope,

    });
    $timeout(function() {
      $location.path("app/event/inner/" + $stateParams.events);
      myPopup.close(); //close the popup after 3 seconds for some reason
    }, 2000);
  };




})


.controller('RateCtrl2', function($scope, $stateParams, MyServices) {
  $scope.name = $stateParams.name;
  $scope.form = {};

  MyServices.getParticipantDetails($stateParams.participant, function(data) {
    $scope.comments = data;
    $scope.comments = _.sortBy($scope.comments, function(n) {
      return -1 * parseFloat(n.score);
    });
  });

});
