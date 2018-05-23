(function(){
  'use strict';
  angular.module('pages.produto', ['ui.select','ui.utils.masks', 'date-picker', 'telefone-input']).config(config);

  function config($stateProvider, $urlRouterProvider, $locationProvider)
  {

    $stateProvider
    .state('pages.produto', {
      abstract : true,
      url      : '/produto',
      resolve  : {

        ClienteController: ['$ocLazyLoad', function($ocLazyLoad) {
          return $ocLazyLoad.load('app/main/produto/produto.controller.js');
        }]

      }
    });
    $stateProvider.state('pages.produto.cadastrar',{
      url    : '/cadastrar',
      views  : {
        'content@pages': {
          templateUrl: 'app/main/produto/tpl/cadastrar.html',
          controller : 'ProdutoController as vm'
        }
      }

    });
  }


})();
