(function () {

    var app = angular.module('profile', ['ngMaterial', 'ngRoute', 'authService']);

    // Setting up CSRF integration with Django
    app.config(function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    });

    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryColor('red', {
                'default': '400'
            })
            .accentColor('green', {});
    });

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/static/profile/templates/login.html'
        }).when('/registro/', {
            templateUrl: '/static/profile/templates/registro.html'
        }).when('/recuperar/', {
            templateUrl: '/static/profile/templates/recuperar-pass.html'
        }).otherwise({
            redirectTo: '/'
        });
    }]);




    app.controller('LoginCtrl', ['$scope', 'AuthService', '$window', function ($scope, AuthService, $window) {

        $scope.login = function () {
            AuthService.login($scope.user.email, $scope.user.password)
                .then(function () {
                    $window.location = '/';
                }, function (error) {
                    $scope.user.email = '';
                    $scope.user.password = '';
                });
        };

        $scope.isUser = function () {
            console.log(AuthService.isUserAuthenticate());
        };
    }]);

})();