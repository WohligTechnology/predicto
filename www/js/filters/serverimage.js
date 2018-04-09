myApp.filter('serverimage', function() {
    console.log("in filter");
    return function(userId) {
        img=  "https://graph.facebook.com/"+userId+"/picture?width=1024&height=1024"
        console.log(img)
        return img
        }
});