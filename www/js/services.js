var adminbase = "http://wohlig.co.in/competo/";

var adminurl = adminbase + "index.php/json/";

angular.module('starter.services', [])
	.factory('MyServices', function ($http, $filter) {
		return {
			signup: function (signup, callback, err) {
				return $http({
					url: adminurl + 'signUp',
					method: "POST",
					data: {
						'username': signup.username,
						'email': signup.email,
						'password': signup.password,
						'dob': signup.dob
					}
				}).success(callback).error(err);
			},
			signin: function (signin, callback, err) {
				return $http({
					url: adminurl + 'signin',
					method: "POST",
					data: {
						'email': signin.username,
						'password': signin.password
					}
				}).success(callback).error(err);
			},
			getDemo: function () {
				return "hello";
			},
			setUser: function (user) {
				$.jStorage.set("user", user);
			},
			getUser: function () {
				return $.jStorage.get("user");
			},
			getEvents: function (pageno, callback, err) {
				return $http.get(adminurl + 'getallcompetition?pageno=' + pageno, {
					withCredentials: false
				}).success(callback).error(err);
			},
			getEventDetail: function(event, callback, err) {
				return $http({
					url: adminurl + 'geteventdetail',
					method: "POST",
					data: {
						'user':$.jStorage.get("user").id,
						'event':event
					}
				}).success(callback).error(err);
			}
		};
	});