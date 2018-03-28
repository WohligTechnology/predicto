myApp.controller('LeaderBoardCtrl', function($scope, $log, $window,Predict,$http) {
Predict.callApiWithoutData("User/leaderboard",function(data){
    console.log(data.data.data)
    $scope.leaderboard=data.data.data
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