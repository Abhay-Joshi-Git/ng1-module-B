(function() {
  'use strict';

  angular.module('moduleB', ['shared']);
})();;(function() {
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
})();angular.module('moduleB').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('greetings/greetings.html',
    "<div>{{cm}}<br><congradulatory-banner message=\"message\"></congradulatory-banner></div>"
  );

}]);
