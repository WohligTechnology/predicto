myApp.controller('CalenderCtrl', function ($scope, $log, $window, Predict, $http, $stateParams, $filter) {
   
    Predict.callApiWithoutData("Match/allMatches", function (data) {
        $scope.matchList = data.data.data;
        
    })

})