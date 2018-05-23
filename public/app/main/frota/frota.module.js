(function(){
    'use strict';
    angular.module('pages.frota', ['ui.select','ui.utils.masks', 'date-picker']).config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider)
    {

        $stateProvider
            .state('pages.frota', {
            abstract : true,
            url      : '/frota',
            resolve  : {

                FrotaController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/main/frota/frota.controller.js');
                }]

            }
        });

        $stateProvider
            .state('pages.frota.veiculo', {
            abstract : true,
            url      : '/veiculo',
            resolve  : {

                VeiculoController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/main/frota/veiculo/veiculo.controller.js');
                }]

            }
        });
        $stateProvider.state('pages.frota.veiculo.cadastrar',{
            url    : '/cadastrar',
            views  : {
                'content@pages': {
                    templateUrl: 'app/main/frota/veiculo/tpl/cadastrar.html',
                    controller : 'VeiculoController as vm'
                }
            }

        });
    }


})();
