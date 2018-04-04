myApp.filter('serverimage', function() {
    console.log("in filter");
    return function(image) {
        if (image && image !== null) {
            var imgarr = image.split("/");
            //    console.log("imageserver",imgarr)
            if (imgarr.length >= 2) {
                return image;
            } else {
                return adminurl + "upload/readFile?file=" + image;
            }
        } else {
            return undefined;
        }
    }
});