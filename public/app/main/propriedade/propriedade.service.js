(function(){
  'use strict';
  angular.module('pages.propriedade').service('PropriedadeService', function($resource){
     return $resource(
          "http://localhost/api/propriedades/:id",
          {id: '@id'},
          { "create": {method:"POST"} }  
      );
  });
})();
