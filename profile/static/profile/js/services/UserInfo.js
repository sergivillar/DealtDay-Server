angular.module('profile').service('UserInfo', ['$http', 'getMyInfo', function ($http, getMyInfo) {

    var user = {
        userInfo: {
            nick: '',
            first_name: '',
            last_name: '',
            email: ''
        },

        retrieveInfo: function () {

            return $http.get(getMyInfo).then(function (data) {
                user.userInfo.nick = data.data.nick;
                user.userInfo.first_name = data.data.user.first_name;
                user.userInfo.last_name = data.data.user.last_name;
                user.userInfo.email = data.data.user.email;

                return data.data;
            });
        }

    };

    return user;

}]);