(function(){
  'use strict';
  angular.module('pages.cliente', ['ui.select','ui.utils.masks', 'date-picker', 'telefone-input']).config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider)
  {

    $stateProvider
    .state('pages.cliente', {
      abstract : true,
      url      : '/cliente',
      resolve  : {

        ClienteController: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/cliente/cliente.controller.js');
        }]

      }
    });
    $stateProvider.state('pages.cliente.cadastrar',{
      url    : '/cadastrar',
      views  : {
        'content@pages': {
          templateUrl: 'app/main/cliente/tpl/cadastrar.html',
          controller : 'ClienteController as vm'
        }
      }

    });
  }


})();
