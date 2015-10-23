angular.module('starter.controllers', ['starter.services'])

.controller('LoginCtrl', function ($scope, $ionicModal, $timeout, MyServices, $ionicPopup, $location) {
	$scope.loginData = [];
	if (MyServices.getUser()) {
		$location.url("/app/event");
	}
	$scope.doLogin = function () {
		console.log($scope.loginData);
		MyServices.signin($scope.loginData, function (data) {
			if (data == "false") {
				var myPopup = $ionicPopup.show({
					template: '<p class="text-center">User not exist</p>',
					title: 'Login!',
					scope: $scope,

				});
				$timeout(function () {
					myPopup.close(); //close the popup after 3 seconds for some reason
				}, 2000);
			} else {
				MyServices.setUser(data);
				var myPopup = $ionicPopup.show({
					template: '<p class="text-center">Login successfully</p>',
					title: 'Login!',
					scope: $scope,

				});
				$timeout(function () {
					myPopup.close(); //close the popup after 3 seconds for some reason
					$location.url("/app/event");
				}, 2000);
			}
		}, function (err) {
			console.log(err);
		})
	}

})

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, MyServices, $location) {
	console.log("app crl");
	if (!MyServices.getUser()) {
		$location.url("/login");
	}
})

.controller('EventCtrl', function ($scope, MyServices) {
	//	MyServices.getEvent();
	$scope.pageno = 1;
	$scope.event = [];
	$scope.keepscrolling = true;
	$scope.loadEvent = function (pageno) {
		MyServices.getEvents(pageno, function (data) {
			if (data.queryresult != '') {
				_.each(data.queryresult, function (n) {
					$scope.event.push(n);
				});
			} else {
				$scope.keepscrolling = false;
			}
		}, function(err){
			console.log(err);
		});

		$scope.$broadcast('scroll.infiniteScrollComplete');
		$scope.$broadcast('scroll.refreshComplete');
	}
	$scope.loadMoreNotification = function () {
		$scope.loadEvent(++$scope.pageno);
	}
	$scope.loadEvent(1);
//	$scope.event = [{
//			id: 1,
//			name: "Event1",
//			date: "22/10/2015",
//			status: true
//},
//		{
//			id: 2,
//			name: "Event2",
//			date: "23/10/2015",
//			status: true
//},
//		{
//			id: 3,
//			name: "Event3",
//			date: "24/10/2015",
//			status: true
//}];
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