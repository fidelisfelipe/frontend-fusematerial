(function ()
{
    'use strict';

    angular
        .module('app.ui.theme-colors')
        .controller('CustomThemeDialogController', CustomThemeDialogController);

    /** @ngInject */
    function CustomThemeDialogController(fuseTheming, $mdDialog, fuseGenerator, $cookies, $window)
    {
        // Data
        var vm = this;
        vm.palettes = fuseTheming.getRegisteredPalettes();
        vm.themes = fuseTheming.getRegisteredThemes();

        // Delete Unnecessary hue value
        delete vm.palettes.grey['1000'];

        // Methods
        vm.rgba = fuseGenerator.rgba;
        vm.setTheme = setTheme;
        vm.closeDialog = closeDialog;

        //////////

        // If custom theme exist keep using it otherwise set default as a custom
        if ( !vm.themes.custom )
        {
            vm.theme = angular.copy(vm.themes['default'].colors);
        }
        else
        {
            vm.theme = vm.themes.custom.colors;
        }

        /**
         * Put custom theme into the cookies
         * and reload for generate styles
         */
        function setTheme()
        {
            $cookies.putObject('customTheme', vm.theme);
            $cookies.put('selectedTheme', 'custom');
            $window.location.reload();
        }

        /**
         * Close dialog
         */
        function closeDialog()
        {
            $mdDialog.hide();
        }
    }
})();