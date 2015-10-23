var adminbase = "http://192.168.0.113/competo/";

var adminurl = adminbase + "index.php/json/";

angular.module('starter.services', [])
  .factory('MyServices', function($http, $filter) {
    return {
      signup: function(signup, callback, err) {
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
      signin: function(signin, callback, err) {
        return $http({
          url: adminurl + 'signin',
          method: "POST",
          data: {
            'email': signin.username,
            'password': signin.password
          }
        }).success(callback).error(err);
      },
      getDemo: function() {
        return "hello";
      },
      setUser: function(user) {
        $.jStorage.set("user", user);
      },
      getUser: function() {
        return $.jStorage.get("user");
      },
      getEvents: function(pageno, callback, err) {
        return $http.get(adminurl + 'getallcompetition?pageno=' + pageno, {
          withCredentials: false
        }).success(callback).error(err);
      },
      getEventDetail: function(event, callback, err) {
        var user = $.jStorage.get("user");
        return $http.get(adminurl + 'getCompetitionDetail?compitition=' + event + "&user=" + user.id).success(callback);
      },
      getParticipantDetails: function(id, callback, err) {
        return $http.get(adminurl + 'getParticipantDetails?id=' + id).success(callback);
      },
      postScore: function(participant, score, comment, callback, err) {
        var user = $.jStorage.get("user");
        return $http.get(adminurl + 'postScore?participant=' + participant + "&score=" + score + "&comment=" + comment + "&user=" + user.id).success(callback);
      }
    };
  });
