angular.module('friend')
    .controller('RequestReceivedCtrl', ['$scope', 'FriendRequest', 'UserInfo', function ($scope, FriendRequest, UserInfo) {

        console.log(UserInfo.userInfo);

        $scope.getRequestReceived = function () {
            FriendRequest.query(function (data){
                console.log(data);
            }, function(error){
                console.log(error);
            })
        };

        $scope.getRequestReceived();
    }]);