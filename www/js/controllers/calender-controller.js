myApp.controller('CalenderCtrl', function($scope, $log, $window,Predict,$http, $stateParams, $filter) {
    var date = new Date();
    var  ddMMyyy = $filter('date')(date, 'dd/MM/yyyy HH:mm');
    $log.log("System date", ddMMyyy);

Predict.callApiWithoutData("Match/allMatches",function(data){
    $scope.matchList=data.data.data;
    // console.log("$scope.matchList", $scope.matchList);

    // for (var i = 0; i < $scope.matchList.length; i++) {
    //   //  $scope.matchList[i].startingTime = $filter("date")( $scope.matchList[i].startingTime);
    //   var filterTime =  $filter("date")( $scope.matchList[i].startingTime, 'HH:mm');
    //  // var minusTime = filterTime - 30;
    //     $log.log("Time in filter", filterTime);
    // }
})

})