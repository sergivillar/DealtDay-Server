angular.module('profile').controller('ProfileCtrl', ['$scope', 'user', function ($scope, user) {

    $scope.nick = user.data.nick;

}]);