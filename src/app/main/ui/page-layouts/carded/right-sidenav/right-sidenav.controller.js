(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.carded.right-sidenav')
        .controller('CardedRightSidenavController', CardedRightSidenavController);

    /** @ngInject */
    function CardedRightSidenavController($mdSidenav)
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