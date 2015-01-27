angular.module('event')
    .controller('EventDetailCtrl', ['$scope', 'Event', '$location', '$routeParams', '$http', 'getMyVotes', '$mdDialog', 'Answer', 'ANSWER_TYPES', '$q', function ($scope, Event, $location, $routeParams, $http, getMyVotes, $mdDialog, Answer, ANSWER_TYPES, $q) {
        var self = this;

        $scope.loading = true;
        $scope.id = $routeParams.id;
        $scope.createMode = false;
        $scope.type_text = ANSWER_TYPES[0].name;

        $scope.answer = new Answer();
        $scope.answer.type = ANSWER_TYPES[0].type;

        this.successGetDetail = function (data) {
            $scope.event = data;
            $scope.answer.event = $scope.event.id;
            if ($scope.event.voters_public) {
                angular.forEach($scope.event.answer, function (value) {
                    value.votes = value.votes.length;
                });
            }
        };

        $scope.next = function () {
            $scope.data.selectedIndex = Math.min($scope.data.selectedIndex + 1, 2);
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
                    $scope.loading = false;
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading = false;
                });
        };

        $scope.displayType = function (type) {
            if (!type) {
                $scope.answer.type = ANSWER_TYPES[0].type;
                var message = ANSWER_TYPES[0].name;
            } else {
                $scope.answer.type = ANSWER_TYPES[1].type;
                var message = ANSWER_TYPES[1].name;
            }
            $scope.answer.answer= '';
            $scope.type_text = message;
        };

        $scope.addDate = function (ev) {
            $mdDialog.show({
                controller: DateTimePicker,
                templateUrl: '/static/event/templates/dialog-time-picker.html',
                targetEvent: ev
            })
                .then(function (data) {
                    $scope.answer.time = data.time;
                    $scope.answer.answer = data.timeFormatted;
                }, function () {
                });
        };

        $scope.add = function () {
            $scope.$broadcast('partial_loading_start');

            $scope.answer.$save(function (data) {
                var type = $scope.answer.type;
                $scope.answer = new Answer();
                $scope.answer.type = type;

                $scope.getEventDetail()
                    .then(function (data) {
                        self.successGetDetail(data);
                    }, function (error) {
                        console.log(error);
                    })
                    .then(function () {
                        $scope.getMyVotes();
                    })
                    .then($scope.$broadcast('partial_loading_end'));

            }, function (error) {
                console.log(error);

                $scope.$broadcast('partial_loading_end');
            });
        };

        $scope.selectText = function (answer) {
            $scope.voteText = answer.id;
        };

        $scope.selectDate = function (answer) {
            $scope.voteDate = answer.id;
        };

        $scope.showCreateMode = function () {
            $scope.createMode ? $scope.createMode = false : $scope.createMode = true;
        };

        $scope.getEventDetail()
            .then(function (data) {
                self.successGetDetail(data);
            }, function (error) {
                console.log(error);
                $scope.loading = false;
            })
            .then(function () {
                $scope.getMyVotes();
            });

    }]);


function DateTimePicker($scope, $mdDialog, $filter) {
    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.save = function (date) {
        var data = [];
        data.time = $filter('date')(date, 'dd/MM/yyyy HH:mm');
        data.timeFormatted = moment(date).format();
        $mdDialog.hide(data);
    };
}
