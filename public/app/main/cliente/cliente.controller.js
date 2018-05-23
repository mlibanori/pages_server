(function() {
    'use strict';
    angular.module('pages.cliente').controller('ClienteController', clienteController);

    function clienteController($scope, $injector, $ocLazyLoad) {
        var PessoaService = null;
        var vm = this;
        var loadPessoaService = $ocLazyLoad.load('app/main/pessoa/pessoa.service.js');

        vm.pessoa = {};
        vm.pessoa.pessoa_fisica = {};
        vm.select = {};
        vm.pessoa.telefones = [];
        vm.select.estados_civis = [];

        vm.select.sexo = ['Masculino', 'Feminino'];
        vm.pessoa.tipo_pessoa = {id: 'f', descricao: 'Pessoa Física'}

        vm.select.tPessoa = [{
            id: 'f',
            descricao: 'Pessoa Física'
        }, {
            id: 'j',
            descricao: 'Pessoa Jurídica'
        }];

        vm.getTipoTelefone = function(init) {
            loadPessoaService.then(function() {
                PessoaService.telefone_tipo.query(function(data) {
                    init(data);
                });
            });
        };
        vm.alert = function(){
          console.log(vm.pessoa);
        };

        //when the service is loaded perform the functions below
        loadPessoaService.then(function() {
            //inject people service
            PessoaService = $injector.get('PessoaService');

            //populate array estados_civis to select component
            PessoaService.estados_civis.query(function(data) {
                vm.select.estados_civis = data;
            });
        });
    }
})();