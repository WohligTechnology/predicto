var myApp = angular.module('starter.controllers', [])
myApp.controller('AppCtrl', function($scope, $ionicModal, $timeout, $log, Predict) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    $log.log("in appctrl");

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
            $scope.closeLogin();
        }, 1000);
    };
    $scope.showMenu = false;
   
    $scope.getMenu = function() {
      
        if ($scope.showMenu == false) {
            // alert('test');
            $scope.showMenu = true;
           

        } else {
            $scope.showMenu = false;

        }
    };
    // for profile image
    $scope.showuserProfImg; // to show user profile image if a user has not set it on their profile
    var userId = $.jStorage.get('user');
    Predict.callApiWithData("User/getone", { _id: userId }, function(userData) {
        $log.log("userData", userData.data.data);
        $scope.userDetail = userData.data.data;
        if($scope.userDetail.points==''){
            $scope.userDetail.points=0
        }
        // $scope.photo='https://graph.facebook.com/100001293139521/picture?width=1024&height=1024';
         $scope.photo="https://graph.facebook.com/"+userData.data.data.userId+"/picture?width=1024&height=1024";

        // to check if user's profile image is set or not
        // if ($scope.userDetail.photo == "") {
        //     $scope.showuserProfImg = true;
        // }
    })
})



// .controller('LoginCtrl', function($scope, $log, $window) {

// })

myApp.controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
    ];
})
myApp.controller('PlaylistCtrl', function($scope, $stateParams) {

})