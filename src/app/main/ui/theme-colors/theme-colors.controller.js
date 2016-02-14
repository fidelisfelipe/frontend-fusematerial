(function ()
{
    'use strict';

    angular
        .module('app.ui.theme-colors')
        .controller('ThemeColorsController', ThemeColorsController);

    /** @ngInject */
    function ThemeColorsController(fuseTheming, $mdDialog, $document)
    {
        var vm = this;
        // Data
        vm.themes = fuseTheming.themes;

        // Methods
        vm.createTheme = createTheme;
        //////////

        function createTheme(ev)
        {
            $mdDialog.show({
                controller         : 'CustomThemeDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/ui/theme-colors/dialogs/custom-theme/custom-theme-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true
            });
        }

    }
})();


