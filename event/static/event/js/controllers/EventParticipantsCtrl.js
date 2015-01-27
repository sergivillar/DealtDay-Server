
angular.module('event')
    .controller('EventParticipantsCtrl', ['$scope', 'Event', '$location', function ($scope, Event, $location) {
        $scope.participants = $scope.event.users;
    }]);