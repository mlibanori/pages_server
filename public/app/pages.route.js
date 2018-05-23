(function(){
  'use strict';
  angular.module('pages').config(routeConfig);
  function routeConfig($stateProvider, $urlRouterProvider, $locationProvider)
  {

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider.state('pages', {
      abstract:true,
      views:{
        'main@':{
          templateUrl: 'app/core/tpl/default.html'
        },
        'navigation@pages':{
            templateUrl: 'app/core/navigation/sidebar.html'
        },
        'header@pages':{
          templateUrl: 'app/core/header/header.html'
        },
        'quickview@pages':{
          templateUrl: 'app/core/quickview/quick-view.html'
        }
      }
    });

    $stateProvider.state('pages.dashboard', {
      url: '/dashboard',
      views:{
        'content@pages':{
          template: '<h1>Bem Vindo!</h1>'
        }

      }
    });


  }

})();
