(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('ColorMenuController', ColorMenuController);

    /** @ngInject */
    function ColorMenuController($mdColorPalette, BoardService)
    {
        var vm = this;

        // Data
        vm.board = BoardService.data;
        vm.palettes = $mdColorPalette;

        // Methods

        ////////

    }
})();