angular.module('event')
    .controller('EventCtrl', ['$scope', 'Event', '$location', function ($scope, Event, $location) {
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

        $scope.createEvent = function () {
          $location.path('/eventos/crear/');
        };

        $scope.$watch('showInactive', function () {
            if (!$scope.showInactive)
                $scope.getEvents();
        });
    }]);