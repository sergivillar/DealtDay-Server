angular.module('event').directive('autoCompleteEmail', ['$http', function ($http) {
    return {
        restrict: 'AE',
        scope: {
            email: '=',
            friends: '=friends'
        },
        templateUrl: '/static/event/templates/autocomplete-email.html',
        link: function (scope, elem, attrs) {

            scope.suggestions = [];
            scope.idInvite = '';
            scope.nick = '';
            scope.canInvite = false;

            scope.search = function () {
                scope.suggestions = [];

                if (scope.searchText != null) {
                    var q = scope.searchText.toLowerCase().trim();
                }

                for (var i = 0; i < scope.friends.length && scope.suggestions.length < 4; i++) {
                    var friend = scope.friends[i];
                    if (friend.friend.toLowerCase().indexOf(q) === 0)
                        scope.suggestions.push(friend);
                }

                scope.selectedIndex = -1;
            };

            scope.addToSelectedTags = function (friend) {
                scope.searchText = friend.friend;
                scope.nick = friend.friend;
                scope.idInvite = friend.id;
                scope.suggestions = [];
                scope.canInvite = true;
            };

            scope.$watch('searchText', function (val) {
                if (scope.nick != val)
                    scope.canInvite = false;
            });

        }
    }
}]);