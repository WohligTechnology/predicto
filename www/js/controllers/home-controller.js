
myApp.controller('HomeCtrl', function ($scope, $log, $window, Predict, $stateParams) {
    console.log($stateParams.id)
    $scope.matchRestriction=false
    var userId = $.jStorage.get('user');
    var matchId = $stateParams.id
    Predict.callApiWithData("Match/getone", { _id: matchId }, function (data) {
        $scope.matchName = data.data.data
        console.log("***********************************", data)
        var endTime=moment(new Date()).add(30, 'minutes').format('MMMM Do YYYY, h:mm:ss a');
        var startTime=moment($scope.matchName.startingTime).format('MMMM Do YYYY, h:mm:ss a');
        console.log("match time before half hour", startTime)
        
        
        console.log("system time",endTime)
        if(startTime<=endTime){

            $scope.matchRestriction=true
        }
    })

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

    $scope.predict = function (bets, data) {
        console.log("bets", data)
        bets.betType = data._id
        bets.match = matchId
        bets.user = userId
        bets.betDone=true
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