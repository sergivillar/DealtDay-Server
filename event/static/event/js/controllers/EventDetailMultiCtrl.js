angular.module('event')
    .controller('EventDetailMultiCtrl', ['$scope', 'Event', '$location', '$http', 'voteApi', '$mdDialog', '$mdToast', function ($scope, Event, $location, $http, voteApi, $mdDialog, $mdToast) {
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
            var data = $scope.votesText.concat($scope.votesDate);
            var dict = {};
            dict['votes'] = data;

            if (data.length == 0) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('ERROR')
                        .content('Selecciona primero una opción para votar.')
                        .ariaLabel('Selecciona opciones votar')
                        .ok('OK')
                        .targetEvent()
                );
            } else {
                $scope.loading_multi = true;

                $http.post(voteApi, dict)
                    .success(function () {
                        Event.detail({id: $scope.id}, function (data) {
                            $scope.event = data;
                            if ($scope.event.voters_public) {
                                angular.forEach($scope.event.answer, function (value) {
                                    value.votes_owners = value.votes;
                                    value.votes = value.votes.length;
                                });
                            }

                            $scope.votesText = [];
                            $scope.votesDate = [];

                            $scope.getMyVotes();
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
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.loading_multi = false;
                    });
            }
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

            if($scope.event.open)
                $scope.initOwners();
        };

        $scope.initOwners = function (){
            angular.forEach($scope.event.answer, function(answer){

                if(answer.votes_owners.length > 0){
                    console.log(answer.votes_owners);
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
                controller: GreetingController,
                templateUrl: '/static/event/templates/vote-owners.html',
                targetEvent: ev,
                locals: { answer: answer}
            })
                .then(function (data) {
                }, function () {
                });
        };

        $scope.$watch('myVotes', function(){
            if($scope.myVotes !=null)
                $scope.initVotes();
        });

        $scope.$on('partial_loading_start', function(){
            $scope.loading_multi = true;
        });

        $scope.$on('partial_loading_end', function(){
            $scope.loading_multi = false;
        });

    }]);

function GreetingController($scope, $mdDialog, answer) {
    // Assigned from construction <code>locals</code> options...
    $scope.answer = answer;
    $scope.closeDialog = function() {
      // Easily hides most recent dialog shown...
      // no specific instance reference is needed.
      $mdDialog.hide();
    };
  }