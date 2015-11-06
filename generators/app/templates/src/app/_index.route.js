(function () {
    'use strict';

    angular
     .module('<%- appName %>')
     .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('home', {
              url: '/home',
              templateUrl: 'app/main/main.html',
              controller: 'MainController',
              controllerAs: 'main'
          })
        .state('contact', {
            url: '/contact',
            templateUrl: 'app/components/contact/contact.html',
            controller: 'ContactController',
            controllerAs: 'co'
        });

        $urlRouterProvider.otherwise('/home');
    }

})();
