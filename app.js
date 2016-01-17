var inspirationApp = angular.module('inspirationApp', ['ngStorage', 'ui.bootstrap', 'ngRoute']);

inspirationApp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        controller: 'ImagesController',
        templateUrl: 'assets/images-list.html'
    })
});
