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
            })
    };

}]);