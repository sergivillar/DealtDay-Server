angular.module('event')
    .controller('EventDetailMultiCtrl', ['$scope', 'Event', '$location', '$http', 'voteApi', function ($scope, Event, $location, $http, voteApi) {
        $scope.loading_multi = false;
        $scope.voteId = [];
        $scope.votesText = [];
        $scope.reamingAnswersText = $scope.event.num_answers;

        $scope.votesDate = [];
        $scope.reamingAnswersDate = $scope.event.num_answers;

        $scope.goEvent = function () {
            $location.path('/eventos/');
        };

        $scope.vote = function () {
            $scope.loading_multi = true;
            var data = $scope.votesText.concat($scope.votesDate);
            var dict = {};
            dict['votes'] = data;

            $http.post(voteApi, dict)
                .success(function () {
                    Event.detail({id: $scope.id}, function (data) {
                        $scope.event = data;
                        $scope.getMyVotes();
                        $scope.loading_multi = false;
                    }, function (error) {
                        console.log(error);
                        $scope.loading_multi = false;
                    });
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading_multi = false;
                });
        };

        $scope.initVotes = function () {
            angular.forEach($scope.myVotes, function (value) {
                $scope.voteId[value.vote] = true
                if (value.type == 'TX') {
                    $scope.votesText.push(value.vote);
                    $scope.reamingAnswersText -= 1;
                } else if (value.type == 'DT') {
                    $scope.votesDate.push(value.vote);
                    $scope.reamingAnswersDate -= 1;
                }
            });
        };

        $scope.voteText = function (answer) {
            if ($scope.votesText.indexOf(answer.id) == -1) {
                $scope.votesText.push(answer.id);
                $scope.voteId[answer.id] = true;
                if ($scope.reamingAnswersText > 0)
                    $scope.reamingAnswersText -= 1;
            } else {
                var splice = $scope.votesText.splice($scope.votesText.indexOf(answer.id), 1);
                $scope.voteId[splice] = false;
                $scope.reamingAnswersText += 1;
            }

            if ($scope.event.num_answers < $scope.votesText.length) {
                var uncheck = $scope.votesText.shift();
                $scope.voteId[uncheck] = false;
            }
        };

        $scope.voteDate = function (answer) {
            if ($scope.votesDate.indexOf(answer.id) == -1) {
                $scope.votesDate.push(answer.id);
                $scope.voteId[answer.id] = true;
                if ($scope.reamingAnswersDate > 0)
                    $scope.reamingAnswersDate -= 1;
            } else {
                var splice = $scope.votesDate.splice($scope.votesDate.indexOf(answer.id), 1);
                $scope.voteId[splice] = false;
                $scope.reamingAnswersDate += 1;
            }

            if ($scope.event.num_answers < $scope.votesDate.length) {
                var uncheck = $scope.votesDate.shift();
                $scope.voteId[uncheck] = false;
            }
        };

        $scope.initVotes();

    }]);