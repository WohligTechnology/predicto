
myApp.controller('HomeCtrl', function ($scope, $log, $window, Predict, $stateParams) {
    console.log($stateParams.id)
    var matchId = $stateParams.id
    // $scope.IstInningScore = false;
    // $scope.tossWinner = false;
    // $scope.Winner = false;
    // $scope.options = {
    //    loop: false,
    //     initialSlide: 0,
    //    };

    $scope.$on("$ionicSlides.sliderInitialized", function (event, data) {
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    Predict.callApiWithoutData("betType/search", function (data) {
        $scope.teamSlider = data.data.data.results
        console.log(data.data.data.results)
        // if($scope.teamSlider.betName==IstInningScore){
    })
    Predict.callApiWithoutData("Team/search", function (data) {
        $scope.teamList = data.data.data.results
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", data)
        // if($scope.teamSlider.betName==IstInningScore){
    })
    Predict.callApiWithData("Match/getone", { _id: matchId }, function (data) {
        $scope.matchName = data.data.data
        console.log("***********************************", data)
    })
    $scope.predict = function (bets) {
               Predict.callApiWithData("UserBets/save", bets, function (data) {
                  console.log("$$$$$$$$$$$$$$$", data)
            // if($scope.teamSlider.betName==IstInningScore){
        })
    }
// $scope.predictfinal = function(bets){
//     var data1 = {}
//     data1.teamName = bets
//     Predict.callApiWithData("UserBets/save", data1, function (data) {
//         console.log("$$$$$$$$$$$$$$$", data)
 
// })
// }

})