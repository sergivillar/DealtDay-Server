angular.module('profile').controller('RegisterCtrl', ['$scope', 'AuthService', '$mdDialog', '$location', function ($scope, AuthService, $mdDialog, $location) {

    $scope.goLogin = function () {
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
                console.log(response);

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