angular.module('event').directive('checkTime', function () {
        return {
            require: 'ngModel',
            scope: {
                time: "=checkTime"
            },
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.checkTime = function (modelValue, viewValue) {

                    if (moment(scope.$parent.event.time_to_close).diff(moment().format(), 'minutes') >= 60) {
                        return true;
                    }

                    return false;
                };

                scope.$watch("time", function () {
                    ctrl.$validate();
                });
            }
        };
    });