inspirationApp.controller('ImagesController', function($scope, LocalStorageFactory){
    $scope.reset = function() {
        $scope.imageUrl = "";
        $scope.imageTag = "";
    }
    
	$scope.saveImage = function(url, tag){
        LocalStorageFactory.saveImage(url, tag);
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
