(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('FiltersSidenavController', FiltersSidenavController);

    /** @ngInject */
    function FiltersSidenavController(msUtils, BoardService, CardFilters)
    {
        var vm = this;

        // Data
        vm.board = BoardService.data;
        vm.cardFilters = CardFilters;
        vm.labels = vm.board.labels;
        vm.members = vm.board.members;
        vm.selectedMenu = 'Settings';

        // Methods
        vm.exists = msUtils.exists;
        vm.toggleInArray = msUtils.toggleInArray;
        vm.clearFilters = CardFilters.clear;
        vm.filteringIsOn = CardFilters.isOn;

        ////////
    }
})();