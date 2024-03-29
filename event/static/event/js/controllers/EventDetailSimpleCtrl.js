angular.module('event')
    .controller('EventDetailSimpleCtrl', ['$scope', 'Event', '$location', '$http', 'voteApi', '$mdDialog', '$mdToast', function ($scope, Event, $location, $http, voteApi, $mdDialog, $mdToast) {
        $scope.loading_simple = false;
        $scope.voteId = [];

        $scope.goEvent = function () {
            $location.path('/eventos/');
        };

        $scope.vote = function () {
            var dict = {};
            if ($scope.voteText != null)
                $scope.voteId.push($scope.voteText);
            if ($scope.voteDate)
                $scope.voteId.push($scope.voteDate);
            dict['votes'] = $scope.voteId;

            if ($scope.voteId.length == 0) {
                $mdDialog.show(
                    $mdDialog.alert()
                        .title('ERROR')
                        .content('Selecciona primero una opción para votar.')
                        .ariaLabel('Selecciona opciones votar')
                        .ok('OK')
                        .targetEvent()
                );
            } else {
                var msg = 'Votos guardados';
                if ($scope.voteId.length == 1)
                    msg = 'Voto guardado';
                $scope.loading_simple = true;

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

                            $scope.voteId = [];

                            $scope.getMyVotes();
                            $scope.loading_simple = false;
                            $mdToast.show(
                                $mdToast.simple()
                                    .content(msg)
                                    .position('bottom right')
                                    .hideDelay(1500)
                            );
                        }, function (error) {
                            console.log(error);
                            $scope.loading_simple = false;
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
                        $scope.loading_simple = false;
                    });
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

        $scope.clickText = function (answer) {
            $scope.voteText = answer.id;
        };

        $scope.clickDate = function (answer) {
            $scope.voteDate = answer.id;
        };

        $scope.initVotes = function () {
            angular.forEach($scope.myVotes, function (value) {
                if (value.type == 'TX') {
                    $scope.voteText = value.vote;
                } else if (value.type == 'DT') {
                    $scope.voteDate = value.vote;
                }
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
    }]);

function VoteOwnersController($scope, $mdDialog, answer) {
    $scope.answer = answer;
    $scope.closeDialog = function () {
        $mdDialog.hide();
    };
}