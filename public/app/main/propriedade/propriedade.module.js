(function(){
    'use strict';
    angular.module('pages.propriedade', ['ui.select','ui.utils.masks', 'date-picker']).config(config);

    function config($stateProvider, $urlRouterProvider, $locationProvider)
    {

        $stateProvider
            .state('pages.propriedade', {
            abstract : true,
            url      : '/propriedade',
            resolve  : {
                PropriedadeController: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('app/main/propriedade/propriedade.controller.js');
                }]

            }
        });


        $stateProvider.state('pages.propriedade.cadastrar',{
            url    : '/cadastrar',
            views  : {
                'content@pages': {
                    templateUrl: 'app/main/propriedade/tpl/cadastrar.html',
                    controller : 'PropriedadeController as vm'
                }
            }

        });
    }


})();
