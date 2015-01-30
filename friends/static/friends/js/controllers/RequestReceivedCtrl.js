angular.module('friend')
    .controller('RequestReceivedCtrl', ['$scope', 'FriendRequest', '$mdDialog', '$mdToast', function ($scope, FriendRequest, $mdDialog, $mdToast) {

        $scope.loading = false;
        $scope.requestSent = [];

        $scope.getRequestReceived = function () {
            $scope.loading = true;
            FriendRequest.query(function (data) {
                $scope.requestSent = data;
                $scope.loading = false;
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            })
        };

        $scope.acceptRequest = function (request) {
            $scope.loading = true;
            FriendRequest.update({id: request.id}, {accepted: true},
                function (data) {
                    $scope.getRequestReceived();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Petición aceptada')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                }, function (error) {
                    console.log(error);
                });
        };

        $scope.showRejectRequest = function (request) {
            var confirm = $mdDialog.confirm()
                .title('RECHAZAR PETICION')
                .content('¿Seguro que deseas rechazar está petición?')
                .ariaLabel('Rechazar petición')
                .ok('SI')
                .cancel('NO')
                .targetEvent(request);

            $mdDialog.show(confirm).then(function () {
                $scope.rejectRequest(request);
            }, function () {
            });
        };

        $scope.rejectRequest = function (request) {
            $scope.loading = true;
            FriendRequest.delete({id: request.id},
                function (data) {
                    $scope.getRequestReceived();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Petición rechazada')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                }, function (error) {
                    console.log(error);
                });

        };

        $scope.getRequestReceived();
    }]);