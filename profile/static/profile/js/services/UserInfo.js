angular.module('profile').service('UserInfo', ['$http', 'getMyInfo', function ($http, getMyInfo) {

    var user = {
        userInfo: {
            nick: '',
            first_name: '',
            last_name: '',
            email: ''
        },

        retrieveInfo: function () {

            $http.get(getMyInfo).then(function (response) {
                user.userInfo.nick = response.data.nick;
                user.userInfo.first_name = response.data.user.first_name;
                user.userInfo.last_name = response.data.user.last_name;
                user.userInfo.email = response.data.user.email;
            }, function (error) {
                console.log(error);
            });

        }

    };

    return user;

}]);