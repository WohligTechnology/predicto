// var adminurl = "http://localhost:80/api/"
var adminurl = "http://192.168.2.53:80/api/"

angular.module('starter.services', [])

  .factory('Predict', function ($http) {
    return {
      getNavigation: function () {
        return navigation;
      },
      callApiWithData: function (url, data, callback) {
        $http.post(adminurl + url, data).then(function (data) {

          callback(data);
        });
      },
      callApiWithoutData: function (url, callback) {
        $http.post(adminurl + url).then(function (data) {

          callback(data);
        });
      }
    };
  })