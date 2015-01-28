angular.module('friend')
    .controller('FriendCtrl', ['$scope', 'getFriends', '$http', function ($scope, getFriends, $http) {
        $scope.loading = true;

        $scope.getFriends = function () {
            $http.get(getFriends)
                .success(function (data) {
                    $scope.friends = data;
                    $scope.loading = false;
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading = false;
                });
        };

        $scope.deleteFriend = function (friend) {
            $scope.loading = true;
            $http.delete(getFriends + friend.id)
                .success(function (data) {
                    $scope.getFriends();
                })
                .error(function (error) {
                    console.log(error);
                    $scope.loading = false;
                });
        };

        $scope.getFriends();
    }]);