(function(){
  'use strict';
  angular.module('pages.frota').service('FrotaService', function($resource){
      this.marcas = $resource("http://localhost:3000/frota/marcas/:id", {id: '@id'});
  });
})();
