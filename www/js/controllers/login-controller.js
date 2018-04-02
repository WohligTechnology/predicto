// // angular.module('starter.controllers', [])
myApp.controller('LoginCtrl', function ($scope, $ionicModal, $timeout, $log, $window, $http, Predict, $cordovaOauth, $state) {
  $log.log("in login controller ");


  //to check a user is logged in or not 
  if ($.jStorage.get("user")) {
    $state.go("app.calender");
  }

  $scope.login = function (userData) {
    Predict.callApiWithData("User/login", userData, function (data) {
      //console.log("value", data.data.value)
      if (data.data.value) {
        $.jStorage.set("user", data.data.data._id);
        $state.go("app.calender");
        // console.log(data.data.data._id);
      }
    });
  };
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
      console.log("Response Object -> " + JSON.stringify(result));
      console.log("twitterLogin", result)
      $.jStorage.set("socialLogin", result);
      $scope.socialLogin = $.jStorage.get("socialLogin")
      console.log("$scope.socialLogin", $scope.socialLogin)
      console.log("$scope.profileData.screen_name", result.screen_name)
      $scope.profileData = result;
      $scope.socialLoginData = {
        name: $scope.profileData.screen_name
        // email: $scope.profileData.email,
        // socailLoginPhoto: $scope.profileData.picture.data.url
        // state: Socialstate[1],
        // city: Socialstate[0],
        // country: "India"
      }
      Predict.callApiWithData("User/getUserforSocailLogin", $scope.socialLoginData, function (data) {
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", data)
        if (data.data.value == true) {
          $scope.userData = data.data.data;
          console.log("data after save###########", $scope.userData)
          $.jStorage.set("user", $scope.userData._id);
          $state.go("app.calender")
        } else {
          Predict.callApiWithData("User/save", $scope.socialLoginData, function (data) {
            console.log("*********************after saving the user in database", data)
            if (data.data.value == true) {
              $scope.userData = data.data.data;
              console.log("data after save***************", $scope.userData)
              $.jStorage.set("user", $scope.userData._id);
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
      $state.go("login");
    });
  }


  $scope.facebookLogin = function () {
    $cordovaOauth.facebook("1814304471935090", ["email", "user_location", "user_relationships", "user_mobile_phone,user_birthday"]).then(function (result) {
      console.log("Response Object -> " + JSON.stringify(result));
      console.log("facebookLogin", result)
      $.jStorage.set("socialLogin", result);
      $scope.socialLogin = $.jStorage.get("socialLogin")
      console.log("$scope.socialLogin", $scope.socialLogin)
      if ($scope.socialLogin.access_token != '') {
        $http.get("https://graph.facebook.com/v2.5/me", {
          params: {
            access_token: $scope.socialLogin.access_token,
            fields: "id,name,email,gender,location,website,picture,relationship_status",
            format: "json"
          }
        }).then(function (result) {
          $scope.profileData = result.data;
          console.log("$scope.profileData", $scope.profileData)
          // var Socialstate = result.data.location.name.split(",")
          $scope.socialLoginData = {
            name: $scope.profileData.name,
            email: $scope.profileData.email,
            socailLoginPhoto: $scope.profileData.picture.data.url
            // state: Socialstate[1],
            // city: Socialstate[0],
            // country: "India"
          }
          Predict.callApiWithData("User/getUserforSocailLoginFacebook", $scope.socialLoginData, function (data) {
            console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", data)
            if (data.data.value == true) {
              $scope.userData = data.data.data;
              console.log("data after save###########", $scope.userData)
              $.jStorage.set("user", $scope.userData._id);
              $state.go("app.calender")
            } else {
              Predict.callApiWithData("User/save", $scope.socialLoginData, function (data) {
                console.log("*********************after saving the user in database", data)
                if (data.data.value == true) {
                  $scope.userData = data.data.data;
                  console.log("data after save***************", $scope.userData)
                  $.jStorage.set("user", $scope.userData._id);
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

  $scope.googleLogin = function () {
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


  $scope.googleLogin = function () {
    window.plugins.googleplus.login({
        'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
        'webClientId': '779493027260-fqlm2b2s6lircrd1k77vt8hvr7ne3gq8.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
        // 'offline': true // optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      },
      function (obj) {
         // do something useful instead of alerting
        console.log('done google login', obj)

        $scope.profileData = obj;
        // var Socialstate = result.data.location.name.split(",")
        $scope.socialLoginData = {
          name: $scope.profileData.displayName,
          email: $scope.profileData.email,
          socailLoginPhoto: $scope.profileData.imageUrl,
          // state: Socialstate[1],
          // city: Socialstate[0],
          // country: "India"
        }
        Predict.apiCallWithData("User/getUserforSocailLoginFacebook", $scope.socialLoginData, function (data) {
          if (data.value == true) {
            $scope.userData = data.data;
            $scope.userData.verified = false;
            $.jStorage.set("user", $scope.userData);
            $state.go("tab.explore")
          } else {
            Predict.apiCallWithData("User/save", $scope.socialLoginData, function (data) {
              console.log("*********************after saving the user in database", data)
              if (data.value == true) {
                $scope.userData = data.data;
                $scope.userData.verified = false;
                $.jStorage.set("user", $scope.userData);
                $state.go("inviteFriends")
              } else {
                console.log("display error")
              }

            })
          }
        })


      },
      function (msg) {
        console.log('done google login', msg)
      }
    );
  }

})