angular.module('profile').service('UserInfo', ['$http', '$q', 'getMyInfo', function ($http, $q, getMyInfo) {

    var user = {
        userInfo: {
            username: '',
            first_name: '',
            last_name: '',
            email: ''

        },

        retrieveInfo: function () {
            var deferred = $q.defer();

            $http.get(getMyInfo).then(function (response) {
                user.userInfo.username = response.data.username;
                user.userInfo.first_name = response.data.first_name;
                user.userInfo.last_name = response.data.last_name;
                user.userInfo.email = response.data.email;

            }, function (error) {
                console.log(error);

            });

        }

    };

    return user;

}]);