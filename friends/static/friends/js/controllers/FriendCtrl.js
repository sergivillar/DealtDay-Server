angular.module('friend')
    .controller('FriendCtrl', ['$scope', 'getFriends', '$http', '$mdDialog', '$mdToast', 'FriendRequest', function ($scope, getFriends, $http, $mdDialog, $mdToast, FriendRequest) {
        $scope.loading = true;
        $scope.addFriendMode = false;
        $scope.error_request = false;

        $scope.addFriend = new FriendRequest();

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

        $scope.showAddFriendMode = function () {
            $scope.addFriendMode ? $scope.addFriendMode = false : $scope.addFriendMode = true;
        };

        $scope.sendFriendRequest = function () {
            $scope.addFriend.$save(function (data) {
                $scope.error_request = false;
                $scope.msg_error = '';

                $mdToast.show(
                    $mdToast.simple()
                        .content('Petición enviada')
                        .position('bottom right')
                        .hideDelay(1500)
                );
                $scope.addFriend = new FriendRequest();
            }, function (error) {
                $scope.error_request = true;
                if ('ErrorBuscando' in error.data) {
                    $scope.msg_error = error.data['ErrorBuscando'];
                } else if ('ErrorPeticionAmistad' in error.data) {
                    $scope.msg_error = error.data['ErrorPeticionAmistad'];
                } else {
                    $scope.msg_error = 'Error al realizar la petición. Vuelve a intentarlo.';
                }
            });
        };

        $scope.getFriends();
    }
    ])
;