(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.simple.right-sidenav')
        .controller('SimpleRightSidenavController', SimpleRightSidenavController);

    /** @ngInject */
    function SimpleRightSidenavController($mdSidenav)
    {
        var vm = this;

        // Data

        // Methods
        vm.toggleSidenav = toggleSidenav;

        //////////

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }
    }

})();