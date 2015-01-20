(function () {

    var app = angular.module('dealtday', [
        'ngMaterial',
        'ngAnimate',
        'ngRoute',
        'event'
    ]);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }]);

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/static/templates/landing.html'
        }).when('/eventos/', {
            templateUrl: '/static/event/templates/event.html'
        }).when('/amigos/', {
            templateUrl: '/static/friends/templates/friends.html'
        }).when('/perfil/', {
            templateUrl: '/static/profile/templates/profile.html'
        }).otherwise({
            redirectTo: '/'
        });
    }]);

    app.config(function ($mdThemingProvider) {
        $mdThemingProvider.definePalette('dealtdayColors', {
            '50': 'DEE7E9',
            '100': 'B0C6CB',
            '200': '81A4AC',
            '300': '4D7F8A',
            '400': '276471',
            '500': '024959',
            '600': '014251',
            '700': '013B48',
            '800': '01333F',
            '900': '01262E',
            'A100': '05C6F2',
            'A200': '0488A5',
            'A400': '025366',
            'A700': '01343F',
            'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                                // on this palette should be dark or light
            'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
                '200', '300', '400', 'A100'],
            'contrastLightColors': undefined    // could also specify this if default was 'dark'
        });
        $mdThemingProvider.theme('default')
            .primaryColor('dealtdayColors')
            .accentColor('red')
            .warnColor('red');
    });

    app.controller('MenuCtrl', function ($scope, $timeout, $mdSidenav, $log, $location) {
        $scope.toggleLeft = function () {
            $mdSidenav('left').toggle();
        };
        $scope.toggleRight = function () {
            $mdSidenav('right').toggle()
                .then(function () {
                    $log.debug("toggle RIGHT is done");
                });
        };

        $scope.navLinks = [
                {url: 'eventos', Title: 'Eventos'},
                {url: 'amigos', Title: 'Amigos'},
                {url: 'perfil', Title: 'Perfil'}
            ];

            $scope.close = function () {
                $mdSidenav('left').close();
            };

            $scope.navClass = function (page) {
                var currentRoute = $location.path().substring(1).split('/')[0];
                return page === currentRoute ? 'active' : '';
            };

    });

})();