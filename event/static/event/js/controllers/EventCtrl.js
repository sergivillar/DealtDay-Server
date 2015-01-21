angular.module('event')
    .controller('EventCtrl', ['$scope', 'Event', '$http', function ($scope, Event, $http) {
        $scope.showInactive = false;
        $scope.loading = false;

        $scope.getEvents = function () {
            $scope.loading = true;
            Event.get(function (data) {
                $scope.events = data;
                $scope.loading = false;
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            });
        };

        $scope.$watch('showInactive', function () {
            if (!$scope.showInactive)
                $scope.getEvents();
        });
    }]);