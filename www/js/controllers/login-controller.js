// // angular.module('starter.controllers', [])
myApp.controller('LoginCtrl', function($scope, $ionicModal, $timeout, $log, $window,$http,Predict,$cordovaOauth) {
    $log.log("in login controller ");

  //   $scope.login=function(userData){
  //      Predict.callApiWithData("User/login",userData, function (data) {
  //     console.log("value",data.data.value)
  //       if(data.data.value == true){
  //       $.jStorage.set("user",data.data.data._id);
  //       console.log(data.data.data._id)
  //      }
  
  //     // if($scope.teamSlider.betName==IstInningScore){
  // })
  // }
// $scope.facebookLogin = function() {
//     console.log("data")
//         $cordovaOauth.facebook("299757727221295", ["email"]).then(function(result) {
//             // results
//             console.log("data",result)
//         }, function(error) {
//             // error
//         });
//     }
$scope.facebookLogin = function() {
 $cordovaOauth.facebook("1814304471935090", ["email", "user_location", "user_relationships"]).then(function (result) {
      console.log("Response Object -> " + JSON.stringify(result));
      console.log("facebookLogin", result)
      $.jStorage.set("socialLogin", result);
      $scope.socialLogin = $.jStorage.get("socialLogin")
      console.log($scope.socialLogin)
      if ($scope.socialLogin.access_token != '') {
        $http.get("https://graph.facebook.com/v2.5/me", {
          params: {
            access_token: $scope.socialLogin.access_token,
            fields: "id,name,email,gender,location,website,picture,relationship_status",
            format: "json"
          }
        }).then(function (result) {
          $scope.profileData = result.data;
          // var Socialstate = result.data.location.name.split(",")
          $scope.socialLoginData = {
            name: $scope.profileData.name,
            email: $scope.profileData.email,
            socailLoginPhoto: $scope.profileData.picture.data.url,
            // state: Socialstate[1],
            // city: Socialstate[0],
            // country: "India"
          }
     
        }, function (error) {
          alert("There was a problem getting your profile. Check the logs for details.");
          console.log(error);
        });

      } else {
        alert("Not signed in");
        $state.go("login");
      }
      //  $state.go("signUp")
      // results
    }, function (error) {
      console.log("facebook login crashed")
    })

  }
    

})