angular.module('friend').
    factory('FriendRequest', ['$resource', 'friendRequestApi', function ($resource, friendRequestApi) {
        return $resource(friendRequestApi + ':id', {id: '@id'});
    }]);