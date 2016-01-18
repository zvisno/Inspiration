inspirationApp.controller('ImagesController', function($scope, LocalStorageFactory){
    $scope.reset = function() {
        $scope.imageUrl = "";
    }

    $scope.alerts = {
        "success": "Added successfully",
        "exists": "URL is either added or you didn't specify it."
    };

    $scope.saved = -1;

    $scope.closeAlert = function(){
        $scope.saved = -1;
    }

	$scope.saveImage = function(url){
        var saved = LocalStorageFactory.saveImage(url);
        $scope.saved = saved?  1 : 0
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
