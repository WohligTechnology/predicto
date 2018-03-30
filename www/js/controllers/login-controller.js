// // angular.module('starter.controllers', [])
myApp.controller('LoginCtrl', function($scope, $ionicModal, $timeout, $log, $window,$http,Predict,$cordovaOauth, $state) {
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

$scope.twitterLogin=function(){
  console.log("In twitter")
  $cordovaOauth.facebook("4lIW80CHbKp0waLOlyfazBIeG","j2qu0FKv0LLfj8eZ1UC35mfyYDGatlWDiZFRmDJvpxcpOYsOY5").then(function (result) {
    oauth_token = result.oauth_token;
                    oauth_token_secret = result.oauth_token_secret;
                    user_id = result.user_id;
                    screen_name = result.screen_name;
                    
                    alert(screen_name);
                    alert(user_id);
                    alert(oauth_token);
                    alert(oauth_token_secret);
                }, function(error) {
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

})