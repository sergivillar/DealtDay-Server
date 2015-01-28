angular.module('friend')
    .controller('FriendCtrl', ['$scope', 'getFriends', '$http', '$mdDialog', '$mdToast', function ($scope, getFriends, $http, $mdDialog, $mdToast) {
        $scope.loading = true;

        $scope.getFriends = function () {
            $http.get(getFriends)
                .success(function (data) {
                    $scope.friends = data;
                    $scope.loading = false;
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading = false;
                });
        };

        $scope.deleteFriend = function (friend) {
            $scope.loading = true;
            $http.delete(getFriends + friend.id)
                .success(function (data) {
                    $scope.getFriends();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Amigo eliminado')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading = false;
                });
        };

        $scope.showDeleteFriend = function (friend) {
            var confirm = $mdDialog.confirm()
                .title('ELIMINAR AMIGO')
                .content('¿Seguro que deseas borrar este amigo?')
                .ariaLabel('Borrar amigo')
                .ok('SI')
                .cancel('NO')
                .targetEvent(friend);
            $mdDialog.show(confirm).then(function () {
                $scope.deleteFriend(friend);
            }, function () {
            });
        };

        $scope.getFriends();
    }
    ])
;