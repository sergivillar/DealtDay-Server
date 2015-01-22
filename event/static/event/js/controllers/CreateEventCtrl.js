angular.module('event')
    .controller('CreateEventCrtl', ['$scope', '$mdDialog', function ($scope, $mdDialog) {

        $scope.event = [];

        $scope.showAdvanced = function (ev) {
            $mdDialog.show({
                controller: DateTimePicker,
                templateUrl: '/static/event/templates/dialog-time-picker.html',
                targetEvent: ev
            })
                .then(function (answer) {
                    $scope.event.date = answer;
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

    }]);

function DateTimePicker($scope, $mdDialog) {
    $scope.cancel = function () {
        $mdDialog.cancel();
    };
    $scope.save = function (date) {
        console.log(date);
        $mdDialog.hide(date);
    };
}