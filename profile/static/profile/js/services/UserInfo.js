angular.module('profile').service('UserInfo', ['$http', 'getMyInfo', function ($http, getMyInfo) {

    var user = {
        userInfo: {
            nick: '',
            first_name: '',
            last_name: '',
            email: ''
        },

        retrieveInfo: function () {

            return $http.get(getMyInfo);
        }

    };

    return user;

}]);