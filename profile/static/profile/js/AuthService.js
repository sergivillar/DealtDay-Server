(function () {

    var app = angular.module('authService', ['ngCookies']);

    app.value('loginUrl', '/api/login/');
    app.value('logoutUrl', '/logout/');
    app.value('registerApi', '/api/user/register/');
    app.value('forgotApi', '/api/forgot-password/');
    app.value('templateRegistro', '/static/profile/templates/registro.html');
    app.value('templateRecuperarPass', '/static/profile/templates/recuperar-pass.html');

    app.service('AuthService', ['$http', '$q', '$window', '$cookies', 'loginUrl', 'logoutUrl', 'registerApi', 'forgotApi', function ($http, $q, $window, $cookies, loginUrl, logout, registerApi, forgotApi) {
        var Authentication = {

            login: function (email, password) {
                var deferred = $q.defer();

                $http.post(loginUrl, {
                    email: email,
                    password: password
                })
                    .success(function (response, status, headers, config) {
                        Authentication.setAuthenticatedAccount(response.email);

                        deferred.resolve(response, status, headers, config);
                    })
                    .error(function (response, status, headers, config) {
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

            register: function (email, pass, pass2) {
                var deferred = $q.defer();

                $http.post(registerApi, {
                        email: email,
                        password: pass,
                        password_2: pass2
                    },
                    {
                        // Metodo para devolver el string del error.
                        transformResponse: [
                            function (data) {
                                var wrapped = angular.fromJson(data);
                                var first = true;
                                angular.forEach(wrapped, function (item) {
                                    if(first){
                                        first = false;
                                        error = item[0];
                                    }
                                });
                                return error;
                            }
                        ]
                    })
                    .success(function (response, status, headers, config) {
                        deferred.resolve(response, status, headers, config);
                    })
                    .error(function (response, status, headers, config) {
                        deferred.reject(response, status, headers, config);
                    });

                return deferred.promise;
            },

            forgot: function (email) {
                var deferred = $q.defer();

                $http.post(forgotApi, {
                    email: email
                })
                    .success(function (response, status, headers, config) {
                        deferred.resolve(response, status, headers, config);
                    })
                    .error(function (response, status, headers, config) {
                        deferred.reject(response, status, headers, config);
                    });

                return deferred.promise;
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

    // TODO mejorar este metodo cuando este montada la navegacion de la web
    app.run(["$rootScope", "$location", 'AuthService', 'templateRegistro', 'templateRecuperarPass', function ($rootScope, $location, AuthService, templateRegistro, templateRecuperarPass) {
        $rootScope.$on("$routeChangeStart", function (event, nextPath, currentPath) {
            if (!AuthService.isUserAuthenticate()) {
                if (nextPath.templateUrl === templateRegistro || nextPath.templateUrl === templateRecuperarPass) {
                } else {
                    $rootScope.$evalAsync(function () {
                        $location.url('/');
                    });
                }
            }
        });
    }]);

})();