(function () {

    var app = angular.module('profile', ['ngMaterial', 'ngRoute', 'ngMessages', 'authService']);

    // Setting up CSRF integration with Django
    app.config(function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    });

    app.config(function ($mdThemingProvider) {
        /*$mdThemingProvider.theme('default')
            .primaryPalette('red', {
                'default': '400'
            })
            .accentPalette('green', {});*/

        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('amber');
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

})();