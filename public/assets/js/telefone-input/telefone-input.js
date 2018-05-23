(function () {
    'use strict';
    var app = angular.module('telefone-input', []);
    app.directive('telefoneFormInput', function ($filter) {
        var diretiva = {};
        diretiva.templateUrl = "/assets/js/telefone-input/tpl.html";
        require: 'ngModel',
                diretiva.scope = {
                    minus: "=",
                    plus: "=",
                    add: "=",
                    remove: "=",
                    index: "=",
                    ngModel: '=',
                    tipoTelefone: '=',
                    teste: '='
                };
        diretiva.link = function (scope, elem, attr, ctrl) {
            var editableObj = elem.find('.tipoTelefone');

            var init = function(source){
                var tipo = [];
                source.map(function (value) {
                    tipo.push({value: value.id, text: value.descricao});
                });
                editableObj.editable({source:tipo, value:scope.ngModel.tipo_telefone});
            };

            scope.tipoTelefone(init);

            editableObj.on('save', function(e, param){
               scope.ngModel.tipo_telefone = param.newValue;
            });
        };
        return diretiva;
    });

    app.directive('telefoneInput', function ($filter) {
        var diretiva = {};
        diretiva.templateUrl = "/assets/js/telefone-input/tpl_form.html";
        require: 'ngModel',
                diretiva.controller = ['$scope', function ($scope) {
                        $scope.add = function () {
                            $scope.ngModel.push({numero: '', tipo_telefone: 1});
                        };
                        $scope.remove = function (index)
                        {
                            $scope.ngModel.splice(index, 1);
                        };
                    }];
        diretiva.scope = {ngModel: '=', tipo: '='};
        diretiva.link = function (scope, elem, attr, ctrl) {
            if (scope.ngModel.length === 0)
            {               
                scope.ngModel = [{numero: '', tipo_telefone: 1}];
            }
        };
        return diretiva;
    });
})();
