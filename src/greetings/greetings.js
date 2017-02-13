(function() {
    'use strict';

    var module = angular.module('moduleB');

    module.directive('greetings', function() {
        return {
            restrict: 'E',
            replace: false,
            scope: {
                message: '='
            },
            //template: '<div>Congrats</div>',
            templateUrl: 'greetings/greetings.html',
            link: function(scope) {
                scope.cm = " Greeting from module B !! ";
            }
        }
    });
})()