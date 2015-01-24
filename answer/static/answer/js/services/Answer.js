angular.module('answer').
    factory('Answer', ['$resource', 'answerApi', function ($resource, answerApi) {
        return $resource(answerApi + ':id', {id: '@id'});
    }]);