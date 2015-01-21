angular.module('event').
    filter('greaterThanToday', function () {
        return function (items) {
            var retn = [];

            var today = new Date();

            angular.forEach(items, function (item) {
                var date = new Date(item.time_to_close);
                if (today < date) {
                    retn.push(item);
                }
            });
            return retn;
        }
    })
    .filter('lessThanToday', function () {
        return function (items) {
            var retn = [];

            var today = new Date();

            angular.forEach(items, function (item) {
                var date = new Date(item.time_to_close);
                if (today > date) {
                    retn.push(item);
                }
            });
            return retn;
        }
    });