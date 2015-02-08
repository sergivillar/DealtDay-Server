angular.module('event')
    .controller('EventDetailMultiCtrl', ['$scope', 'Event', '$location', '$http', 'voteApi', '$mdDialog', '$mdToast',
        function ($scope, Event, $location, $http, voteApi, $mdDialog, $mdToast) {
            var self = this;
            $scope.loading_multi = false;
            $scope.voteId = [];
            $scope.votesText = [];
            $scope.reamingAnswersText = $scope.event.num_answers;

            $scope.votesDate = [];
            $scope.reamingAnswersDate = $scope.event.num_answers;

            $scope.goEvent = function () {
                $location.path('/eventos/');
            };

            this.successGetDetail = function (data) {

                $scope.event = data;

                if ($scope.event.voters_public) {
                    angular.forEach($scope.event.answer, function (value) {
                        value.votes_owners = value.votes;
                        value.votes = value.votes.length;
                    });
                }
            };

            $scope.vote = function () {

                $scope.loading_multi = true;

                var sendVote = function () {
                        var data = $scope.votesText.concat($scope.votesDate);
                        var dict = {};
                        dict['votes'] = data;

                        return $http.post(voteApi, dict);
                    },
                    refreshEvent = function () {
                        console.log("refresh");
                        return $http.get('/api/event/' +  $scope.id).then(function (data) {
                                self.successGetDetail(data.data);
                            }, function (error) {
                                console.log(error);
                                $scope.loading_multi = false;
                            });
                    },
                    refreshVotes = function () {
                        $scope.votesText = [];
                        $scope.votesDate = [];
                        return $scope.getMyVotes();
                    };

                sendVote()
                    .then(refreshEvent, function(error){
                        alert(error);
                        console.log(error);
                    })
                    .then(refreshVotes, function(error){
                        alert(error);
                        console.log(error);
                    })
                    .then(function () {
                        $scope.loading_multi = false;
                        $mdToast.show(
                            $mdToast.simple()
                                .content('Votos guardados')
                                .position('bottom right')
                                .hideDelay(1500)
                        );
                    }, function (error) {
                        console.log(error);
                        $scope.loading_multi = false;
                        $mdToast.show(
                            $mdToast.simple()
                                .content('Error al votar')
                                .position('bottom right')
                                .hideDelay(1500)
                        );
                    });
            };

            $scope.initVotes = function () {
                $scope.reamingAnswersText = $scope.event.num_answers;
                $scope.reamingAnswersDate = $scope.event.num_answers;

                angular.forEach($scope.myVotes, function (value) {
                    $scope.voteId[value.vote] = true;
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

            $scope.viewVoters = function (ev, answer) {
                $mdDialog.show({
                    controller: VoteOwnersController,
                    templateUrl: '/static/event/templates/vote-owners.html',
                    targetEvent: ev,
                    locals: {answer: answer}
                })
                    .then(function (data) {
                    }, function () {
                    });
            };

            $scope.$watch('myVotes', function () {
                if ($scope.myVotes != null)
                    $scope.initVotes();
            });

            $scope.$on('partial_loading_start', function () {
                $scope.loading_multi = true;
            });

            $scope.$on('partial_loading_end', function () {
                $scope.loading_multi = false;
            });

        }])
;

function VoteOwnersController($scope, $mdDialog, answer) {
    $scope.answer = answer;
    $scope.closeDialog = function () {
        $mdDialog.hide();
    };
}