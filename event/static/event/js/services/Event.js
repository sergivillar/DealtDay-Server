angular.module('event').
    factory('Event', ['$resource', 'eventApi', function ($resource, eventApi) {
        return $resource(eventApi + ':id', {id: '@id'}, {
            get: {
                method: 'GET',
                isArray: true
            },
            detail: {
                method: 'GET'
            },
            save: {
                method: 'POST',
                transformRequest: function (data, headers) {
                    delete data.date;
                    return JSON.stringify(data);
                }
            }
        });
    }]);