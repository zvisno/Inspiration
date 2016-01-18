describe('images', function () {
    var $rootScope, $scope, $controller;

    beforeEach(module('inspirationApp'));
    
    beforeEach(inject(function(_$controller_, $localStorage){
      $controller = _$controller_;
    }));
    
    it("test reset form", function(){
        var $scope = {};
        var controller = $controller('ImagesController', { $scope: $scope });
        $scope.imageUrl = 'url';
        
        $scope.reset();
        
        expect($scope.imageUrl).toBeEmpty;
    })
});
