myApp.filter('timeFilter', function() {
    console.log("in filter");
    return function(startingTime) {
        // moment(startingTime).format('h:mma');
        return  moment(startingTime)
        .subtract({'hours': 0, 'minutes': 30})
        .format('hh:mm')
    }
});