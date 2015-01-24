angular.module('answer')
    .controller('CreateAnswersCrtl', ['$scope', '$mdDialog', '$filter', '$location', 'Answer', 'ANSWER_TYPES', function ($scope, $mdDialog, $filter, $location, Answer, ANSWER_TYPES) {

        $scope.loading = false
        $scope.type_text = ANSWER_TYPES[0].name;
        $scope.type = false;

        $scope.answers = new Answer();
        $scope.answers = [];
        $scope.answers.type = ANSWER_TYPES[0].type;

        $scope.displayType = function (type) {
            if(!type){
                $scope.answers.type = ANSWER_TYPES[0].type;
                var message = ANSWER_TYPES[0].name;
            } else {
                $scope.answers.type = ANSWER_TYPES[1].type;
                var message = ANSWER_TYPES[1].name;
            }

            console.log(message);
            $scope.type_text = message;
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