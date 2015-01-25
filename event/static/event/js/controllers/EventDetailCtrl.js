angular.module('event')
    .controller('EventDetailCtrl', ['$scope', 'Event', '$location', '$routeParams', function ($scope, Event, $location, $routeParams) {
        $scope.loading = true;
        $scope.id = $routeParams.id;

        $scope.next = function () {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
        };
        $scope.previous = function () {
            $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
        };

        $scope.getEventDetail = function () {
            $scope.loading = true;
            Event.detail({id: $scope.id}, function (data) {

            console.log(data);
                console.log(data);
                $scope.event = data;
                $scope.loading = false;
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            });
        };

        $scope.selectText = function (answer){
          $scope.voteText = answer.id;
        };

        $scope.selectDate = function (answer){
          $scope.voteDate = answer.id;
        };

        $scope.getEventDetail();
    }]);