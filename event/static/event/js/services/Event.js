angular.module('event').
    factory('Event', ['$resource', 'eventApi', function ($resource, eventApi) {
        return $resource(eventApi + ':id', {id: '@id'}, {
            'get': {
                method: 'GET',
                isArray: true
            }
        });
    }]);