myApp.controller('CalenderCtrl', function($scope, $log, $window, Predict, $http, $stateParams, $filter) {
    var userId = $.jStorage.get('user');
    Predict.callApiWithData("betType/getBetTypeFinal", { user: userId, betName: 'tournamentWinner' }, function(data) {
        $scope.teamSlider = data.data.data
        console.log("betType", data.data.data)
    });
    Predict.callApiWithoutData("Match/allMatches", function(data) {
        $scope.matchList = data.data.data;

    })
})