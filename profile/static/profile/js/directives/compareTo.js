angular.module('profile').directive('compareTo', function () {
    return {
        require: "ngModel",
        scope: {
            repeatPassword: '=compareTo'
        },
        link: function (scope, element, attr, ngModel) {
            ngModel.$validators.compareTo = function (modelValue, viewValue) {
                return viewValue == scope.repeatPassword;
            };

            scope.$watch("repeatPassword", function () {
                ngModel.$validate();
            });
        }
    }
});