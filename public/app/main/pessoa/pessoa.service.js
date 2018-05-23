(function(){
  'use strict';
  angular.module('pages.pessoa').service('PessoaService', function($resource){
      this.telefone_tipo = $resource("http://localhost:3000/pessoas/telefones/tipos/:id", {id: '@id'});
      this.estados_civis = $resource("http://localhost:3000/pessoas/estadoscivis/:id", {id: '@id'});
  });
})();
