myApp.controller('CalenderCtrl', function($scope, $log, $window,Predict,$http) {
Predict.callApiWithoutData("Match/search",function(data){
    $scope.matchList=data.data.data.results
    console.log($scope.matchList)
})

    // $scope.carddata = [
    //     {
    //         city : "Mumbai Indians",
    //         city2 : "Knight Riders",
    //         date : "10/03/2016",
    //         time : "20.30"
    //     },
    //     {
    //         city : "Mumbai Indians",
    //         city2 : "Knight Riders",
    //         date : "10/03/2016",
    //         time : "20.30"
    //     },
    //     {
    //         city : "Mumbai Indians",
    //         city2 : "Knight Riders",
    //         date : "10/03/2016",
    //         time : "20.30"
    //     },
    //     {
    //         city : "Mumbai Indians",
    //         city2 : "Knight Riders",
    //         date : "10/03/2016",
    //         time : "20.30"
    //     }
    // ]
})