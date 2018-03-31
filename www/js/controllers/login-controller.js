// // angular.module('starter.controllers', [])
myApp.controller('LoginCtrl', function ($scope, $ionicModal, $timeout, $log, $window, $http, Predict, $cordovaOauth, $state) {
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
  // $scope.facebookLogin = function() {
  //  $cordovaOauth.facebook("1814304471935090", ["email", "user_location", "user_relationships"]).then(function (result) {
  //       console.log("Response Object -> " + JSON.stringify(result));
  //       console.log("facebookLogin", result)
  //       $.jStorage.set("socialLogin", result);
  //       $scope.socialLogin = $.jStorage.get("socialLogin")
  //       console.log($scope.socialLogin)
  //       if ($scope.socialLogin.access_token != '') {
  //         $http.get("https://graph.facebook.com/v2.5/me", {
  //           params: {
  //             access_token: $scope.socialLogin.access_token,
  //             fields: "id,name,email,gender,location,website,picture,relationship_status",
  //             format: "json"
  //           }
  //         }).then(function (result) {
  //           $scope.profileData = result.data;
  //           // var Socialstate = result.data.location.name.split(",")
  //           $scope.socialLoginData = {
  //             name: $scope.profileData.name,
  //             email: $scope.profileData.email,
  //             socailLoginPhoto: $scope.profileData.picture.data.url,
  //             // state: Socialstate[1],
  //             // city: Socialstate[0],
  //             // country: "India"
  //           }

  //         }, function (error) {
  //           alert("There was a problem getting your profile. Check the logs for details.");
  //           console.log(error);
  //         });

  //       } else {
  //         alert("Not signed in");
  //         $state.go("login");
  //       }
  //       //  $state.go("signUp")
  //       // results
  //     }, function (error) {
  //       console.log("facebook login crashed")
  //     })

  //   }

  $scope.twitterLogin = function () {
    console.log("In twitter")
    $cordovaOauth.twitter("4lIW80CHbKp0waLOlyfazBIeG", "j2qu0FKv0LLfj8eZ1UC35mfyYDGatlWDiZFRmDJvpxcpOYsOY5").then(function (result) {
      var oauth_token = result.oauth_token;
      var oauth_token_secret = result.oauth_token_secret;
      var user_id = result.user_id;
      var screen_name = result.screen_name;

      alert(screen_name);
      alert(user_id);
      alert(oauth_token);
      alert(oauth_token_secret);
      console.log(result);
    }, function (error) {
      alert("Error: " + error);
     
    });
  }


  $scope.facebookLogin = function () {
    $cordovaOauth.facebook("1979088845454078", ["email", "user_location", "user_relationships"]).then(function (result) {
      console.log("Response Object -> " + JSON.stringify(result));
      console.log("facebookLogin", result)
      $.jStorage.set("socialLogin123", result);
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
          Predict.callApiWithData("User/getUserforSocailLoginFacebook", $scope.socialLoginData, function (data) {
            if (data.value == true) {
              $scope.userData = data.data;
              $scope.userData.verified = false;
              $.jStorage.set("user", $scope.userData);
              $state.go("app.calender")
            } else {
              Predict.callApiWithData("User/save", $scope.socialLoginData, function (data) {
                console.log("*********************after saving the user in database", data)
                if (data.data.value == true) {
                  $scope.userData = data.data;
                  $scope.userData.verified = false;
                  $.jStorage.set("user", $scope.userData);
                  $state.go("app.calender")
                } else {
                  console.log("display error")
                }

              })
            }
          })
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

  // google login
//   $scope.googleLogin = function() {
//     console.log("button clicked");
//     $cordovaOauth.google("323609618732-47m84dip4vkgkfn04e55d9qoe0thhibo.apps.googleusercontent.com", ["email", "profile"]).then(function(result) {
//       console.log("in google");
//         $scope.details = result.access_token;
//         console.log("google result:", result);
//     }, function(error) {
//       // Error code here
//       console.log("error code");
//     });
// }

$scope.googleLogin = function() {
  window.plugins.googleplus.login(
    {
      // 'scopes': '... ', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '408325132592-2i25vp68b2h8f2cvmigdff27m530k03r.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
    },
    function (obj) {
      alert(JSON.stringify(obj)); // do something useful instead of alerting
    },
    function (msg) {
      alert('error: ' + msg);
    }
  );
}


// $scope.googleLogin = function() {
//   $cordovaOauth.google("779493027260-fqlm2b2s6lircrd1k77vt8hvr7ne3gq8.apps.googleusercontent.com", ["email", "profile"]).then(function(result) {
//     console.log("Google login", result);
//       $scope.details = result.access_token;
//   }, function(error) {
//     // Error code here
//     console.log("in errors", error);
//   });
// }

})