(function() {
    'use strict';
    angular.module('pages.propriedade').controller('PropriedadeController', PropriedadeController);

    function PropriedadeController($scope, $injector, $ocLazyLoad) {
        var PropriedadeService = null;

        var loadPropriedadeService = $ocLazyLoad.load('app/main/propriedade/propriedade.service.js');
        var vm = this;

        vm.select = {};

        vm.select.proprietarios = [{
            nome: "Marcos"
        }, {
            nome: "João"
        }];

        //when the service is loaded perform the functions below
        loadPropriedadeService.then(function() {
            //inject people service
            PropriedadeService = $injector.get('PropriedadeService');
            vm.propriedade = new PropriedadeService();
        });

        var reset = function(){
            vm.propriedade = new PropriedadeService();
            $scope.formPropriedade.$setPristine();
            $scope.formPropriedade.$setValidity();
            $scope.formPropriedade.$setUntouched();
        };

        vm.salvar = function(event) {
            $(event.target).button('loading');
            PropriedadeService.save(vm.propriedade, function(data) {
                $('body').pgNotification({
                    message: "Propriedade cadastrada com sucesso!",
                    type: "success",
                    position: "top-right",
                    timeout: 7000,
                    style: "flip"
                }).show();
                $(event.target).button('reset');
                reset();
            }, function(retorno) {
                angular.forEach(retorno.data, function(error) {
                    $('body').pgNotification({
                        message: error.message,
                        type: "danger",
                        position: "top-right",
                        timeout: 7000,
                        style: "flip"
                    }).show();
                })
                $(event.target).button('reset');
            })
        }



    }
})();