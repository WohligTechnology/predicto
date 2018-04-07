myApp.controller('LeaderBoardCtrl', function($scope, $log, $window,Predict,$http) {
Predict.callApiWithoutData("User/leaderboard",function(data){
    console.log(data.data.data)
    $scope.leaderboard=data.data.data
    $scope.photo="https://graph.facebook.com/"+data.data.data.userId+"/picture?width=1024&height=1024";
    // if($scope.leaderboard.points==null){
    //     $scope.leaderboard.points=0
    // }
   
})

// $scope.leaderboard = [
//     {
//         name:"Varun Kothari",
//         number:"81"
//     },
//     {
//         name:"Sarvesh Bramhe",
//         number:"78"
//     },
//     {
//         name:"Sarvesh Bramhe",
//         number:"78"
//     },
//     {
//         name:"Sarvesh Bramhe",
//         number:"78"
//     },
//     {
//         name:"Varun Kothari",
//         number:"81"
//     },
//     {
//         name:"Varun Kothari",
//         number:"81"
//     },
//     {
//         name:"Varun Kothari",
//         number:"81"
//     },
//     {
//         name:"Varun Kothari",
//         number:"81"
//     },
//     {
//         name:"Varun Kothari",
//         number:"81"
//     },
//     {
//         name:"Varun Kothari",
//         number:"81"
//     },
//     {
//         name:"Varun Kothari",
//         number:"81"
//     },
  

// ]

})