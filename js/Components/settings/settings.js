(function() {
angular.module('App')
    .component('settings',{
       bindings: {},
        templateUrl: '../js/Components/settings/settings.html',
        controller: settingsController,
        controllerAs: 'vm'
    });
    
    function settingsController(mainService) {
        vm = this;
        vm.$onInit = onInit;
        vm.styles = [];

        vm.applyStyles = function(style) {
          mainService.setStyle(style);
        };

        function onInit() {
            vm.styles = mainService.getStyles();
        }
    }
    
})();