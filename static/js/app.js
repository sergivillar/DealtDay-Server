(function () {

    var app = angular.module('dealtday', [
        'ngMaterial'
    ]);

    app.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    }]);

})();