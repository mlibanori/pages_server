(function() {
    'use strict';
    angular.module('pages.frota').controller('FrotaController', frotaController);

    function frotaController($scope, $injector, $ocLazyLoad) {
        var FrotaService = null;
        var vm = this;
        var loadFrotaService = $ocLazyLoad.load('app/main/frota/frota.service.js');

        //when the service is loaded perform the functions below
        loadPessoaService.then(function() {
            //inject people service
            FrotaService = $injector.get('FrotaService');

            //populate array estados_civis to select component
            FrotaService.marcas.query(function(data) {
                vm.marcas = data;
            });
        });
    }
})();