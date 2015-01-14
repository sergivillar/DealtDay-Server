(function(){

    var app = angular.module('profile', ['ngMaterial', 'ngRoute']);

    // Setting up CSRF integration with Django
    app.config(function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    });

    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryColor('red', {
                'default': '400'
            })
            .accentColor('green', {
            });
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

    app.controller('LoginCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
        $scope.status = 'WAITING';

        $scope.login = function(){
            var data = {
                username : $scope.username,
                password : $scope.password
            };
            $scope.status = 'TRYING';
            $http.post('/api/1.0/login', data).success(function(data, status, headers, config) {
                $scope.status = 'LOGGED';
                $window.location.href = '/';
            }).error(function(data, status, headers, config) {
                if (status == 404) {s
                    $scope.status = 'LOGIN_ERROR';
                } else {
                    $scope.status = 'UNKNOWN_ERROR';
                }
            });
            return false;
        };


    }]);

})();