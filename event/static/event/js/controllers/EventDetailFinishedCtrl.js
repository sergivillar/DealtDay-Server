angular.module('event')
    .controller('EventDetailFinishedCtrl', ['$scope', 'Event', '$location', '$routeParams', '$http', 'getMyVotes', '$mdDialog', 'Answer', 'ANSWER_TYPES', '$q', 'getFriends',
        function ($scope, Event, $location, $routeParams, $http, getMyVotes, $mdDialog, Answer, ANSWER_TYPES, $q, getFriends) {
            var self = this;

            $scope.data = [];
            $scope.loading = true;
            $scope.id = $routeParams.id;
            $scope.type_text = ANSWER_TYPES[0].name;

            $scope.answer = new Answer();
            $scope.answer.type = ANSWER_TYPES[0].type;

            this.successGetDetail = function (data) {

                $scope.event = data;
                $scope.answer.event = $scope.event.id;

                if ($scope.event.voters_public) {
                    angular.forEach($scope.event.answer, function (value) {
                        value.votes_owners = value.votes;
                        value.votes = value.votes.length;
                    });
                }
            };

            $scope.next = function () {
                $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 1);
            };
            $scope.previous = function () {
                $scope.data.selectedIndex = Math.max($scope.data.selectedIndex - 1, 0);
            };

            $scope.getEventDetail = function () {
                return Event.detail({id: $scope.id}).$promise;
            };

            $scope.getMyVotes = function () {
                $http.get(getMyVotes + $scope.id)
                    .success(function (data) {
                        $scope.myVotes = data;
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.loading = false;
                    });
            };

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

            $scope.init = function () {
                return $scope.getEventDetail()
                    .then(function (data) {
                        self.successGetDetail(data);
                    }, function (error) {
                        console.log(error);
                        $scope.loading = false;
                    })
                    .then(function () {
                        $scope.getMyVotes();
                    })
                    .then(function () {
                        $scope.getFriends();
                    });
            };

            $scope.init();

        }]);
