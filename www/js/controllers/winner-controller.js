myApp.controller('WinnerCtrl', function($scope, $log, Predict) {
    Predict.callApiWithoutData("Team/search", function(data) {
        $scope.teamList = data.data.data.results
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", data)
            // if($scope.teamSlider.betName==IstInningScore){
    });
    var userId = $.jStorage.get('user');
    $scope.predict = function(bets) {
        bets.user = userId
        bets.betType = '5ab8aac1e041644734ddcef2'
        Predict.callApiWithData("UserBets/save", bets, function(saveResult) {
            console.log(saveResult)
        })
    }
    Predict.callApiWithData("betType/getBetType", { user: userId, betType: '5ab8aac1e041644734ddcef2' }, function(data) {
        $scope.teamSlider = data.data.data
        console.log("betType", data.data.data)

    });
})