describe('images', function () {
    var $rootScope, $scope, $controller;

    beforeEach(module('inspirationApp'));
    
    beforeEach(inject(function(_$controller_, $localStorage){
      $controller = _$controller_;
    }));
    
    it("tests something", function(){
        var $scope = {};
        var controller = $controller('ImagesController', { $scope: $scope });
        $scope.imageUrl = 'url';
        $scope.imageTag = 'tag';
        
        $scope.reset();
        
        expect($scope.imageUrl).toBeEmpty;
        expect($scope.imageTag).toBeEmpty;       
    })
});
