(function () {

    var app = angular.module('profile', ['ngMaterial', 'ngRoute', 'ngMessages', 'authService']);

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


    app.controller('LoginCtrl', ['$scope', 'AuthService', '$window', '$mdDialog', '$location', function ($scope, AuthService, $window, $mdDialog, $location) {

        $scope.goRegistro = function (){
          $location.path('/registro/');
        };

        $scope.goRecuperarPass = function (){
          $location.path('/recuperar/');
        };

        $scope.login = function () {
            AuthService.login($scope.user.email, $scope.user.password)
                .then(
                function () {
                    $window.location = '/';
                },
                function (error) {
                    $scope.user.email = '';
                    $scope.user.password = '';

                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('¡ ERROR !')
                            .content(error[Object.keys(error)])
                            .ariaLabel('Error registrandose')
                            .ok('OK')
                    );
                });
        };

        $scope.isUser = function () {
            console.log(AuthService.isUserAuthenticate());
        };
    }]);

    app.controller('RegisterCtrl', ['$scope', 'AuthService', '$mdDialog', '$location', function ($scope, AuthService, $mdDialog, $location) {

        $scope.goLogin = function (){
          $location.path('/');
        };

        $scope.loading = false;

        $scope.register = function () {
            $scope.loading = true;
            AuthService.register($scope.user.email, $scope.user.password, $scope.user.password_repeat)
                .then(
                function (data) {
                    $scope.loading = false;

                    $scope.user.password = '';
                    $scope.user.password_repeat = '';

                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('¡ ENHORABUENA !')
                            .content('Revisa tu correo para activar tu cuenta')
                            .ariaLabel('Registro correcto')
                            .ok('OK')
                    );
                },
                function (response, status, headers, config) {
                    $scope.loading = false;

                    $scope.user.password = '';
                    $scope.user.password_repeat = '';

                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('¡ ERROR !')
                            .content(response)
                            .ariaLabel('Error registrandose')
                            .ok('OK')
                    );
                });
        };
    }]);

    app.directive('compareTo', function () {
        return {
            require: "ngModel",
            scope: {
                repeatPassword: '=compareTo'
            },
            link: function (scope, element, attr, ngModel) {
                ngModel.$validators.compareTo = function (modelValue, viewValue) {
                    return viewValue == scope.repeatPassword;
                };

                scope.$watch("repeatPassword", function () {
                    ngModel.$validate();
                });
            }
        }
    });

})();