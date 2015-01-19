angular.module('profile').controller('ForgotCtrl', ['$scope', 'AuthService', '$mdDialog', '$location', function ($scope, AuthService, $mdDialog, $location) {

    $scope.goLogin = function () {
        $location.path('/');
    };

    $scope.loading = false;

    $scope.forgot = function () {
        $scope.loading = true;
        AuthService.forgot($scope.user.email)
            .then(
            function (data) {
                $scope.loading = false;

                $scope.user.email = '';

                $mdDialog.show(
                    $mdDialog.alert()
                        .title('¡ ENVIADO !')
                        .content('Revisa tu correo para restablecer tu contraseña')
                        .ariaLabel('Recuperar contraseña')
                        .ok('OK')
                );
            },
            function (response, status, headers, config) {
                $scope.loading = false;

                $scope.user.email = '';

                $mdDialog.show(
                    $mdDialog.alert()
                        .title('¡ ERROR !')
                        .content('Se ha producido un error al restablecer la contraseña.')
                        .ariaLabel('Error enviando correo')
                        .ok('OK')
                );
            });
    };

}]);