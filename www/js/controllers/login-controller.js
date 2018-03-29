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
$scope.facebookLogin = function() {
        $cordovaOauth.facebook("299757727221295", ["email"]).then(function(result) {
            // results
            console.log("data",result)
        }, function(error) {
            // error
        });
    }
    

})