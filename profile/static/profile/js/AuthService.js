(function () {

    var app = angular.module('authService', ['ngCookies']);

    app.value('loginUrl', '/api/login/');
    app.value('logoutUrl', '/logout/');
    app.value('templateRegistro', '/static/profile/templates/registro.html');

    app.service('AuthService', ['$http', '$q', '$window', '$cookies', 'loginUrl', 'logoutUrl', function ($http, $q, $window, $cookies, loginUrl, logout) {
        var Authentication = {

            login: function (email, password) {
                var deferred = $q.defer();

                $http.post(loginUrl, {
                    email: email, password: password
                }).success(function (response, status, headers, config) {
                    Authentication.setAuthenticatedAccount(response.email);

                    deferred.resolve(response, status, headers, config);
                }).error(function (response, status, headers, config) {
                    deferred.reject(response, status, headers, config);
                });

                return deferred.promise;
            },

            logout: function () {
                $http.get(logout)
                    .success(function (response, status, headers, config) {
                        Authentication.unautheticate();

                        $window.location = '/';
                    }).error(function (response, status, headers, config) {
                    });
            },

            isUserAuthenticate: function () {
                return !!$cookies.authenticatedAccount;
            },

            setAuthenticatedAccount: function (account) {
                $cookies.authenticatedAccount = account.split("@")[0];
            },

            unautheticate: function () {
                delete $cookies.authenticatedAccount;
            }
        };

        return Authentication;
    }]);

    app.run(["$rootScope", "$location", 'AuthService', 'templateRegistro', function ($rootScope, $location, AuthService, templateRegistro) {
        $rootScope.$on("$routeChangeStart", function (event, nextPath, currentPath) {
            if (!AuthService.isUserAuthenticate()) {
                if (nextPath.templateUrl === templateRegistro) {
                } else {
                    $rootScope.$evalAsync(function () {
                        $location.url('/');
                    });
                }
            }
        });
    }]);

})();