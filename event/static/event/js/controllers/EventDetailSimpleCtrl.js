angular.module('event')
    .controller('EventDetailSimpleCtrl', ['$scope', 'Event', '$location', '$http', 'voteApi', '$mdDialog', function ($scope, Event, $location, $http, voteApi, $mdDialog) {
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
                $scope.loading_simple = true;

                $http.post(voteApi, dict)
                    .success(function () {
                        Event.detail({id: $scope.id}, function (data) {
                            $scope.event = data;
                            $scope.getMyVotes();
                            $scope.loading_simple = false;
                        }, function (error) {
                            console.log(error);
                            $scope.loading_simple = false;
                        });
                    })
                    .error(function (error) {
                        console.log(error);
                        $scope.loading_simple = false;
                    });
            }
        };

        $scope.clickText = function (answer) {
            $scope.voteText = answer.id;
        };

        $scope.clickDate = function (answer) {
            $scope.voteDate = answer.id;
        };

        $scope.initVotes = function () {
            angular.forEach($scope.myVotes, function (value) {
                console.log(value);
                if (value.type == 'TX') {
                    $scope.voteText = value.vote;
                } else if (value.type == 'DT') {
                    $scope.voteDate = value.vote;
                }
            });
        };

        $scope.initVotes();
    }]);