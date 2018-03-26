
    myApp.controller('IndividualTeamCtrl', function($scope, $log, $window) {
        $scope.options = {
            autoplay: 3000,
            loop: false,
            initialSlide: 0,
            //effect: 'fade',
            speed: 300, //0.3s seconds
            //slidesPerView: 2
        };
        $scope.teamSlider = [
            { img: ["img/flower.jpg", "img/price.png"] },
            { img: ["img/price.png", "img/flower.jpg"] }
        ];
        $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
            // data.slider is the instance of Swiper
            $scope.slider = data.slider;
        });

    })