inspirationApp.factory('LocalStorageFactory', ['$localStorage', function($localStorage){
    var getImages = function(){
        return $localStorage.images
    };
    
    var saveImage = function(image){
        if (image){
            var exists = getImages().indexOf(image);
            if (exists === -1){
                $localStorage.images.push(image);
                return true
            }else{
                return false
            }
        }
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
        "http://www.car-brand-names.com/wp-content/uploads/2015/05/Renault-logo-2.png",
        "https://upload.wikimedia.org/wikipedia/en/thumb/2/24/Alfa_Romeo.svg/1024px-Alfa_Romeo.svg.png",
        "http://www.toyota-global.com/showroom/emblem/passion/images/passion_img01.jpg",
        "http://www.allcarbrandslist.com/wp-content/uploads/2015/03/mercedes-logo.jpg",
        "http://www.bugatti.com/typo3conf/ext/bugatti_design/Resources/Public/Images/og_bugatti.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hyundai_Motor_Company_logo.svg/2000px-Hyundai_Motor_Company_logo.svg.png"]

    
    return { getImages: getImages,
             saveImage: saveImage,
             initLocalStorage: initLocalStorage,
             populateLocalStorage: populateLocalStorage }
}]);
