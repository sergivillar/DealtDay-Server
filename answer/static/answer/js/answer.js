var app = angular.module('answer', ['mdDateTime', 'ngMessages']);

app.value('ANSWER_TYPES', [
    {type: 'TX', name: 'Texto'},
    {type: 'DT', name: 'Fecha'}
]);