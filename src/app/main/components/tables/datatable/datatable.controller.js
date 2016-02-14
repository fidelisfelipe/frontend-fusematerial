(function ()
{
    'use strict';

    angular
        .module('app.components.tables.datatable')
        .controller('DatatableController', DatatableController);

    /** @ngInject */
    function DatatableController(Employees)
    {
        var vm = this;

        // Data
        vm.employees = Employees.data;

        vm.dtOptions = {
            dom       : '<"top"f>rt<"bottom"<"left"<"length"l>><"right"<"info"i><"pagination"p>>>',
            pagingType: 'simple',
            autoWidth : false,
            responsive: true
        };

        // Methods

        //////////
    }

})();