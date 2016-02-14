(function ()
{
    'use strict';

    angular
        .module('app.components.tables.simple-table')
        .controller('SimpleTableController', SimpleTableController);

    /** @ngInject */
    function SimpleTableController(Employees)
    {
        var vm = this;

        // Data
        vm.employees = Employees.data;

        // Methods

        //////////
    }

})();