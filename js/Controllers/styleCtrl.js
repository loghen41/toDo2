(function(){
angular.module('App')
    .controller('styleCtrl', function(mainService) {
        this.$onInit = function() {
            this.style = mainService.getSelectedStyle();
        };
        
    });

})();
