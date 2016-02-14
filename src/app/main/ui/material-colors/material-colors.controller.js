(function ()
{
    'use strict';

    angular
        .module('app.ui.material-colors')
        .controller('MaterialColorsController', MaterialColorsController);

    /** @ngInject */
    function MaterialColorsController($mdColorPalette)
    {
        var vm = this;

        // Data
        vm.palettes = $mdColorPalette;

        // Methods

        //////////
    }
})();