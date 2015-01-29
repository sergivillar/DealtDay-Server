angular.module('friend')
    .controller('RequestReceivedCtrl', ['$scope', 'FriendRequest', function ($scope, FriendRequest) {

        $scope.getRequestReceived = function () {
            FriendRequest.query(function (data){
                console.log(data);
            }, function(error){
                console.log(error);
            })
        };

        $scope.getRequestReceived();
    }]);