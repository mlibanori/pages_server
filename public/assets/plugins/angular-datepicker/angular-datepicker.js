(function () {
    'use strict';
    var app = angular.module('date-picker', []);
    app.directive('datePicker', function ($filter) {
        var directive = {};
        directive.restrict = 'A';
        directive.scope = {
            format: '@?'
        };
        directive.require = '?ngModel';


        directive.link = function (scope, elem, attrs, ctrl) {
            if (!ctrl)
                return;
            var configs = {
                format: scope.format || 'mm/dd/yy',
                autoclose: scope.autoclose || true
            };
            console.log(scope);
            elem.datepicker(configs);
            ctrl.$formatters.unshift(function (a) {
                if (ctrl.$modelValue !== "" && ctrl.$modelValue !== undefined ){
                    elem.datepicker('setDate', ctrl.$modelValue);
                    return moment(ctrl.$modelValue).format(configs.format.toUpperCase());
                }
                return "";
            });
            ctrl.$parsers.unshift(function (viewValue) {
                return moment(viewValue, configs.format.toUpperCase()).toDate();

            });

        };

        return directive;
    });


})();
