/**
 * Created by loganhendricks on 7/26/16.
 */
(function () {
    angular.module('App')
        .component('noData', {
                controller: dataController,
                controllerAs: 'vm',
                templateUrl: '../js/Directives/no-data/no-data.html'
            }
        );

    function dataController() {
        
    }
})();