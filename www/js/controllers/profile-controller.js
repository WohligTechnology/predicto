myApp.controller('ProfileCtrl', function($scope, $log, $window, Predict, $http) {
    $scope.showuserProfImg; // to show user profile image if a user has not set it on their profile
    var userId = $.jStorage.get('user');
    Predict.callApiWithData("User/getone", { _id: userId }, function(userData) {
        $log.log("userData", userData.data.data);
        $scope.userDetail = userData.data.data;

        // to check if user's profile image is set or not
        if ($scope.userDetail.photo == "") {
            $scope.showuserProfImg = true;
        }
    })
})