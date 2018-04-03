myApp.controller('HomeCtrl', function($scope, $log, $window, Predict, $stateParams) {
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

    $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });

    Predict.callApiWithoutData("betType/search", function(data) {
        $scope.teamSlider = data.data.data.results
        console.log("$scope.teamSlider", data)
            // if($scope.teamSlider.betName==IstInningScore){
    });
    Predict.callApiWithoutData("Team/search", function(data) {
        $scope.teamList = data.data.data.results
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", data)
            // if($scope.teamSlider.betName==IstInningScore){
    });
    Predict.callApiWithData("Match/getone", { _id: matchId }, function(data) {
        $scope.matchName = data.data.data
        console.log("***********************************", data)
    });
    $scope.btnDisableTossWinner = false; // to disable the button when user submits the answers
    $scope.btnDisableWinner = false; // to disable the button when user submits the answers
    $scope.btnDisableIstInningScore = false; // to disable the button when user submits the answers
    $scope.btnDisableIstPlayerScore = false; // to disable the button when user submits the answers
    $scope.btnDisableTournamentWinner = false; // to disable the button when user submits the answers
    $scope.predict = function(bets, data) {
            console.log("bets", data)
            bets.betType = data._id
            bets.match = matchId
            bets.user = userId

            //to disable the button over conditions
            if (data.betName.toLowerCase() == "tosswinner") {
                $log.log("in tossWinner");
                $scope.btnDisableTossWinner = true;
            } else if (data.betName.toLowerCase() == "winner") {
                $log.log("in winner");
                $scope.btnDisableWinner = true;
            } else if (data.betName.toLowerCase() == "istinningscore") {
                $log.log("in istinningscore");
                $scope.btnDisableIstInningScore = true;
            } else if (data.betName.toLowerCase() == "playerscore") {
                $log.log("in istplayerscore", data.betName.toLowerCase());
                $scope.btnDisableIstPlayerScore = true;
            } else if (data.betName.toLowerCase() == "tournamentwinner") {
                $log.log("in tournamentwinner");
                $scope.btnDisableTournamentWinner = true;
            }
            Predict.callApiWithData("UserBets/save", bets, function(data) {
                console.log("$$$$$$$$$$$$$$$", data);
            });
        } // end of fun predict

});