myApp.controller('CalenderCtrl', function($scope, $log, $window,Predict,$http, $stateParams) {

Predict.callApiWithoutData("Match/allMatches",function(data){
    $scope.matchList=data.data.data
    console.log($scope.matchList)
})

})