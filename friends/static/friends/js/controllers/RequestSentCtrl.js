angular.module('friend')
    .controller('RequestSentCtrl', ['$scope', 'FriendRequest', '$mdDialog', '$mdToast', function ($scope, FriendRequest, $mdDialog, $mdToast) {

        $scope.loading = false;
        $scope.requestSent = [];

        $scope.getRequestSent = function () {
            $scope.loading = true;
            FriendRequest.query(function (data) {
                $scope.requestSent = data;
                $scope.loading = false;
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            })
        };

        $scope.showRejectRequest = function (request) {
            var confirm = $mdDialog.confirm()
                .title('DESHACER PETICION')
                .content('¿Seguro que deseas deshacer está petición?')
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
            console.log(request);
            FriendRequest.delete({id: request.id},
                function (data) {
                    $scope.getRequestSent();
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Petición deshecha')
                            .position('bottom right')
                            .hideDelay(1500)
                    );
                }, function (error) {
                    console.log(error);
                });

        };

        $scope.getRequestSent();
    }]);