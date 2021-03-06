myApp.controller('WinnerCtrl', function($scope, $log, Predict,$ionicPopover, $timeout, $ionicPopup) {
    var userId = $.jStorage.get('user');
    Predict.callApiWithoutData("Team/search", function(data) {
        $scope.teamList = data.data.data.results
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", data)
            // if($scope.teamSlider.betName==IstInningScore){
    });
    Predict.callApiWithData("betType/getBetTypeFinal", { user: userId, betName: 'tournamentWinner' }, function(data) {
        $scope.teamSlider = data.data.data
    });
    
    $scope.predict = function(bets) {
        bets.user = userId
        bets.betType = '5acd99f19becf316c7d3bca8'
        if($scope.teamSlider.betDone){
            var myPopup = $ionicPopup.show({
                title: 'Predict already done',
                scope: $scope
            });
            $timeout(function() {
                myPopup.close();
            }, 1500);
        }else{
        Predict.callApiWithData("UserBets/addUserBets", bets, function(saveResult) {
            console.log(saveResult)
            Predict.callApiWithData("betType/getBetTypeFinal", { user: userId, betName: 'tournamentWinner'}, function(data) {
                $scope.teamSlider = data.data.data
                console.log("betType", data.data.data)
                window.location.reload()
            });
        })
        var myPopup = $ionicPopup.show({
            title: 'Predict successful',
            scope: $scope
        });
        $timeout(function() {
            myPopup.close();
        }, 1500);
    }
    }
   
})