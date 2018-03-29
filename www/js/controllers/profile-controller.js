myApp.controller('ProfileCtrl', function($scope, $log, $window,Predict,$http) {
    var userId = $.jStorage.get('user');
    Predict.callApiWithData("User/getone",{_id:userId},function(userData){
console.log("userData",userData.data.data);
$scope.userDetail=userData.data.data
    })
})