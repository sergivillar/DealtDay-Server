angular.module('answer')
    .controller('CreateAnswersCrtl', ['$scope', '$mdDialog', '$filter', '$location', 'Answer', 'ANSWER_TYPES', '$http', function ($scope, $mdDialog, $filter, $location, Answer, ANSWER_TYPES, $http) {

        $scope.loading = false;

        $scope.canCreateEvent = false;
        var hasText = false;
        var hasDate = false;
        var numText = 0;
        var numDate = 0;

        $scope.type_text = ANSWER_TYPES[0].name;
        $scope.type = false;

        $scope.answers = new Answer();
        $scope.answers = [];
        $scope.answer = {};
        $scope.answer.type = ANSWER_TYPES[0].type;

        $scope.goEvent = function () {
            $location.path('/eventos/');
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

        $scope.add = function () {
            $scope.answers.push($scope.answer);
            if ($scope.answer.type == ANSWER_TYPES[0].type) {
                hasText = true;
                numText += 1;
            } else {
                hasDate = true;
                numDate += 1;
            }

            var type = $scope.answer.type;
            $scope.answer = {};
            $scope.answer.type = type;
        };

        $scope.deleteAnswer = function (answer) {
            var type = answer.type;
            var can_delete = true;

            $scope.answers.splice($scope.answers.indexOf(answer), 1);

            angular.forEach($scope.answers, function (value, key) {
                if (value.type == type)
                    can_delete = false;
            });

            if (type == ANSWER_TYPES[0].type) {
                numText -= 1;
                if (can_delete)
                    hasText = false;
            } else {
                numDate -= 1;
                if (can_delete)
                    hasDate = false;
            }
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

        $scope.create = function () {
            $scope.loading = true;
            $http.post('/api/evento/create_all/', {event: $scope.event, answers: $scope.answers}).
                success(function (data, status, headers, config) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('¡ CREADO !')
                            .content('Tu evento se ha creado correctamente')
                            .ariaLabel('Evento OK')
                            .ok('OK')
                    );
                    $scope.loading = false;
                    $scope.goEvent();
                }).
                error(function (data, status, headers, config) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .title('¡ ERROR !')
                            .content('Ha habido un error al crear tu evento. Inténtalo de nuevo.')
                            .ariaLabel('Evento OK')
                            .ok('OK')
                    );

                    $scope.loading = false;
                    $scope.goEvent();
                });
        };

        $scope.back = function () {
            $scope.$emit('back');
        };

        $scope.activeCreate = function () {
            return !($scope.canCreateEvent && $scope.answers.length != 0) || $scope.loading;
        };

        $scope.$watchCollection('answers', function () {
            checkCreateEvent();
        });

        $scope.$watch('event.num_answers', function () {
            checkCreateEvent();
        });

        function checkCreateEvent() {
            var text = true;
            var date = true;

            if (hasText) {
                text = numText >= $scope.event.num_answers;
            }
            if (hasDate) {
                date = numDate >= $scope.event.num_answers;
            }

            if (text && date && $scope.answers.length != 0)
                $scope.canCreateEvent = true;
            else
                $scope.canCreateEvent = false;
        }
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

