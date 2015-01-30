angular.module('friend').
    filter('filterFromFriend', function () {
        return function (items, user_email) {
            var retn = [];

            angular.forEach(items, function (item) {
                if (item.from_friend.email != user_email) {
                    retn.push(item);
                }
            });
            return retn;
        }
    });