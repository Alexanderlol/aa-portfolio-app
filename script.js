//create module
var webApp = angular.module('webApp', ['ngRoute', 'ngAnimate']);



    // configure our routes
    webApp.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })
            // route for the experience page
            .when('/experience', {
                templateUrl : 'pages/experience.html',
                controller  : 'experienceController'
            })
            .when('/portfolio', {
                templateUrl : 'pages/portfolio.html',
                controller  : 'portfolioController'
            })
            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });



            // use the HTML5 History API    
            $locationProvider.html5Mode(false);

});



    // create the controller and inject Angular's $scope
    webApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.pageClass = '/page-home';
        $scope.updates = ['<br><br><br><br>Hi, my name is Alex. I like to learn, progress, and develop<br>Discover who I am'];
        $(function(){
            $(".update-box p").typed({
              strings:$scope.updates,
              typeSpeed: 50,
              loop: false,
             // backSpeed: 50,
             // backDelay: 300,
              contentType: 'html',
              loopCount: false,
              showCursor: false,
              cursorChar: "|"
            });
          });  
    });

    webApp.controller('experienceController',function($scope) {
        $scope.pageClass = '/page-experience';
        $scope.updates = ['<br><br><br><br><br>My Skills and Experience...'];
        $(function(){
            $(".update-box p").typed({
              strings:$scope.updates,
              typeSpeed: 60,
              loop: false,
             // backSpeed: 50,
             // backDelay: 300,
              contentType: 'html',
              loopCount: false,
              showCursor: false,
              cursorChar: "|"
            });
          });
        //default states for about-buttons
        $scope.Dev = false;
        $scope.Work = false;
    });

    webApp.controller('portfolioController', function($scope) {
        $scope.pageClass = '/page-portfolio';
    });

    webApp.controller('contactController', function($scope, $http) {
        $scope.pageClass = '/page-contact';
    });