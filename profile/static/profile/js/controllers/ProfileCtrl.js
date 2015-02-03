angular.module('profile').controller('ProfileCtrl', ['$scope', 'user', 'changeNick', 'changePass', '$http', 'UserInfo', '$mdToast', function ($scope, user, changeNick, changePass, $http, UserInfo, $mdToast) {

    $scope.nick = user.nick;

    $scope.changeNick = function (nick) {

        $http.post(changeNick, {nick: nick})
            .success(function (data) {
                UserInfo.retrieveInfo();
                $mdToast.show(
                    $mdToast.simple()
                        .content('Nick cambiado')
                        .position('bottom right')
                        .hideDelay(1500)
                );
            })
            .error(function (error) {
                console.log(error);
                $mdToast.show(
                    $mdToast.simple()
                        .content('Error cambiando nick')
                        .position('bottom right')
                        .hideDelay(1500)
                );
            });
    };

    $scope.changePass = function () {

        $http.post(changePass, {password: $scope.user.password, password_2: $scope.user.password_repeat})
            .success(function (data) {
                $mdToast.show(
                    $mdToast.simple()
                        .content('Contraseña cambiada')
                        .position('bottom right')
                        .hideDelay(1500)
                );
            })
            .error(function (error) {
                console.log(error);
                $mdToast.show(
                    $mdToast.simple()
                        .content('Error cambiando contraseña')
                        .position('bottom right')
                        .hideDelay(1500)
                );
            });
    };

}]);