(function() {
    'use strict';
    angular.module('pages.produto').controller('ProdutoController', clienteController);

    function clienteController($scope) {
        var PessoaService = null;
        var vm = this;

        vm.produto = {};

        vm.select = {};
        vm.select.sexo = ['Masculino', 'Feminino'];


        vm.alert = function(){
          console.log(vm.produto);
        };

    }
})();