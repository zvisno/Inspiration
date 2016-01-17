inspirationApp.factory('LocalStorageFactory', ['$localStorage', function($localStorage){
    var getImages = function(){
        return $localStorage.images
    };
    
    var saveImage = function(image){
        $localStorage.images.push(image);
    };
    
    var initLocalStorage = function(){
        if ($localStorage.images === undefined){
            $localStorage.images = []
        }
    }
    
    var populateLocalStorage = function(){
         $localStorage.images = testLocalStorageData
    }
    
    var testLocalStorageData = [
        "http://protruskavets.org.ua/protrusk/wp-content/gallery/divchyna-zhovtnya-2012/1.jpg",
        "http://img0.joyreactor.cc/pics/post/%D0%9C%D0%BE%D1%8F-%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0-%D1%84%D1%8D%D0%BD%D0%B4%D0%BE%D0%BC%D1%8B-%D0%94%D1%96%D0%B2%D1%87%D0%B8%D0%BD%D0%B0-%D0%B2%D0%B8%D1%88%D0%B8%D0%B2%D0%B0%D0%BD%D0%BA%D0%B0-2580494.jpeg",
        "http://spy-football.com/wp-content/gallery/neymar_lenzi/10-1-610x610.jpg",
        "http://skifiya.fotoclub.info/-imgs/fest/photo/size1/img_1299435922_f49e5.jpg",
        "http://litclub.org.ua/media/textpict/26359"]

    
    return { getImages: getImages,
             saveImage: saveImage,
             initLocalStorage: initLocalStorage,
             populateLocalStorage: populateLocalStorage }
}]);
