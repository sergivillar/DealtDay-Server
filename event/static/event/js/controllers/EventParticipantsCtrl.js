angular.module('event')
    .controller('EventParticipantsCtrl', ['$scope', function ($scope) {
        $scope.loading_participants = false;
        $scope.participants = $scope.event.users;

        $scope.$root.$on('refresh_event', function () {
            $scope.loading_participants = true;
            $scope.init()
                .then(function () {
                    $scope.participants = $scope.event.users;
                    $scope.loading_participants = false;
                });
        });
    }]);