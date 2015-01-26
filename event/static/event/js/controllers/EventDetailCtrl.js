angular.module('event')
    .controller('EventDetailCtrl', ['$scope', 'Event', '$location', '$routeParams', '$http', 'getMyVotes', function ($scope, Event, $location, $routeParams, $http, getMyVotes) {
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
                $scope.event = data;
                if ($scope.event.voters_public) {
                    angular.forEach($scope.event.answer, function (value) {
                        value.votes = value.votes.length;
                    });
                }
                $scope.getMyVotes();
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            });
        };

        $scope.getMyVotes = function () {
            $http.get(getMyVotes + $scope.id)
                .success(function (data) {
                    $scope.myVotes = data;
                    $scope.loading = false;
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading = false;
                });
        };

        $scope.selectText = function (answer) {
            $scope.voteText = answer.id;
        };

        $scope.selectDate = function (answer) {
            $scope.voteDate = answer.id;
        };

        $scope.getEventDetail();
    }]);