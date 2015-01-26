angular.module('event')
    .controller('EventDetailMultiCtrl', ['$scope', 'Event', '$location', '$routeParams', function ($scope, Event, $location, $routeParams) {
        $scope.voteId = [];
        $scope.votesText = [];
        $scope.reamingAnswersText = $scope.event.num_answers;

        $scope.votesDate = [];
        $scope.reamingAnswersDate = $scope.event.num_answers;

        $scope.initVotes = function () {
            angular.forEach($scope.myVotes, function (value) {
                $scope.voteId[value.vote] = true
                if (value.type == 'TX') {
                    $scope.votesText.push(value.vote);
                    $scope.reamingAnswersText -= 1;
                }else if (value.type == 'DT') {
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