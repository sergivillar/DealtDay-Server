angular.module('event')
    .controller('EventDetailCtrl', ['$scope', 'Event', '$location', function ($scope, Event, $location) {
        $scope.loading = false;

        $scope.getEventDetail = function () {
            $scope.loading = true;
            Event.get(function (data) {
                $scope.events = data;
                $scope.loading = false;
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            });
        };
    }]);