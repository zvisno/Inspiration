inspirationApp.controller('ImagesController', function($scope, LocalStorageFactory){
    $scope.reset = function() {
        $scope.imageUrl = "";
    }
    
	$scope.saveImage = function(url){
        LocalStorageFactory.saveImage(url);
    };
    
    $scope.listImages = function(){
        return LocalStorageFactory.getImages();
    };
      
    $scope.init = function(){
        LocalStorageFactory.initLocalStorage();
    }
    
    $scope.setDemoImages = function(){
        LocalStorageFactory.populateLocalStorage()
    } 
});
