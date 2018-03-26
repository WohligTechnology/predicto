
myApp.controller('HomeCtrl', function($scope, $log, $window) {
    $scope.options = {
        // autoplay: 3000,
        loop: false,
        initialSlide: 0,
        //effect: 'fade',
        // speed: 900, //0.3s seconds
        //slidesPerView: 2
    };
    $scope.teamSlider = [
      {
          question:"How many runs will Aaron Finch score?",
          option1:"40-50",
          option2:"40-50",
          option3:"40-50",
          option4:"40-50"
      },
      {
        question:"How many runs will Aaron",
        option1:"40-50",
        option2:"40-50",
        option3:"40-50",
        option4:"40-50"
    }
    ];
    $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
        // data.slider is the instance of Swiper
        $scope.slider = data.slider;
    });
})