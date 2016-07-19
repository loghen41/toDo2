(function(){
var app = angular.module('App', ['ui.router', 'ngStorage'])
    .config(function($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise('/list');
        
        $stateProvider
            .state('list', {
                url: '/list',
                template: '<list></list>'
            })
            .state('about', {
                url: '/about',
                template: '<about></about>'
            })
            .state('task', {
                url: '/task',
                template: '<task></task>'
            })
    })

})();