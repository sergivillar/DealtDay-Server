angular.module('profile').controller('LoginCtrl', ['$scope', 'AuthService', '$window', '$mdDialog', '$location', function ($scope, AuthService, $window, $mdDialog, $location) {

    $scope.goRegistro = function () {
        $location.path('/registro/');
    };

    $scope.goRecuperarPass = function () {
        $location.path('/recuperar/');
    };

    $scope.loading = false;

    $scope.login = function () {
        $scope.loading = true;
        AuthService.login($scope.user.email, $scope.user.password)
            .then(
            function () {
                $scope.loading = false;
                $window.location = '/';
            },
            function (error) {
                $scope.loading = false;
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

}]);