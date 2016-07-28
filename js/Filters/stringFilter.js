/**
 * Created by loganhendricks on 7/26/16.
 */

(function(){
angular.module('App')
    .filter('stringFilter', function() {

        return function(input) {

            if (typeof input === string) {

                var output = ''
            }

            return output;

        }

    });

})();