myApp.controller('WinnerCtrl', function($scope, $log,Predict) {
    Predict.callApiWithoutData("Team/search", function(data) {
        $scope.teamList = data.data.data.results
        console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%", data)
            // if($scope.teamSlider.betName==IstInningScore){
    });
})