angular.module('event').directive('autoCompleteEmail', ['$http', function ($http) {
    return {
        restrict: 'AE',
        scope: {
            email: '=',
            friends: '=friends',
            event: '=event'
        },
        templateUrl: '/static/event/templates/autocomplete-email.html',
        link: function (scope, elem, attrs) {

            var without_friends = 'Aun no tienes amigos';
            var not_found = 'Ningun amigo con ese nick';

            scope.suggestions = [];
            scope.idInvite = '';
            scope.nick = '';
            scope.canInvite = false;

            scope.search = function () {
                scope.suggestions = [];

                if (scope.searchText != null) {
                    var q = scope.searchText.toLowerCase().trim();
                }

                if (scope.friends.length == 0) {
                    scope.suggestions.push({
                        friend: {
                            nick: without_friends
                        }
                    });

                } else {

                    for (var i = 0; i < scope.friends.length && scope.suggestions.length < 4; i++) {
                        var friend = scope.friends[i];
                        if (friend.friend.nick.toLowerCase().indexOf(q) === 0)
                            scope.suggestions.push(friend);
                    }

                    if (scope.suggestions.length == 0 && scope.searchText != null) {
                        scope.suggestions.push({
                            friend: {
                                nick: not_found
                            }
                        });
                    }
                }
            };

            scope.addToSelectedTags = function (friend) {
                if (friend.friend.nick != without_friends && friend.friend.nick != not_found) {
                    scope.searchText = friend.friend.nick;
                    scope.nick = friend.friend.nick;
                    scope.idInvite = friend.friend.id;
                    scope.suggestions = [];
                    scope.canInvite = true;
                } else {
                    scope.searchText = '';
                    scope.suggestions = [];
                }
            };

            scope.$watch('searchText', function (val) {
                if (scope.nick != val)
                    scope.canInvite = false;
            });

        }, controller: function ($scope, $http, $mdToast) {
            $scope.sendInvitation = function () {
                $http.post('/api/share/ ', {event: $scope.event, profile: $scope.idInvite})
                    .success(function (data) {
                        $scope.$emit('refresh_event');
                        
                        $mdToast.show(
                                $mdToast.simple()
                                    .content('Usuario añadido')
                                    .position('bottom right')
                                    .hideDelay(1500)
                            );
                    })
                    .error(function (error) {
                        $scope.$root.$emit('refresh_event');
                        console.log(error);

                        if (error['YaInvitado'] != null) {
                            $mdToast.show(
                                $mdToast.simple()
                                    .content(error['YaInvitado'][0])
                                    .position('bottom right')
                                    .hideDelay(1500)
                            );
                        }
                    });
            };
        }
    }
}]);