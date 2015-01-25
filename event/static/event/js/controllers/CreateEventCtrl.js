angular.module('event')
    .controller('CreateEventCrtl', ['$scope', '$mdDialog', '$filter', '$location', 'Event', function ($scope, $mdDialog, $filter, $location, Event) {
        $scope.loading = false;
        $scope.createAnswers = false;

        $scope.event = new Event();
        $scope.event.open = false;
        $scope.event.voters_public = false;
        $scope.event.time_to_close = '';

        $scope.dateFormatted = '';

        $scope.goEvent = function () {
            $location.path('/eventos/');
        };

        $scope.showAdvanced = function (ev) {
            $mdDialog.show({
                controller: DateTimePicker,
                templateUrl: '/static/event/templates/dialog-time-picker.html',
                targetEvent: ev
            })
                .then(function (data) {
                    $scope.event.date = data.time;
                    $scope.event.time_to_close = data.timeFormatted;
                }, function () {
                });
        };

        $scope.showAlertPublicVotes = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('VOTACIONES PÚBLICAS')
                    .content('Especifica si quieres que aparezca el dueño de cada voto o quieres que sea anonimo.')
                    .ariaLabel('Votaciones publicas alert')
                    .ok('OK')
                    .targetEvent(ev)
            );
        };

        $scope.showAlertOpenEvent = function (ev) {
            $mdDialog.show(
                $mdDialog.alert()
                    .title('EVENTO ABIERTO')
                    .content('Especifica si quieres que los usuarios de este eventos puedan invitar a otros usuarios.')
                    .ariaLabel('Evento abierto alert')
                    .ok('OK')
                    .targetEvent(ev)
            );
        };

        $scope.$on('back', function (event) {
            $scope.createAnswers = false;
        });

        $scope.next =  function () {
            $scope.createAnswers = true;
        };

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