(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.carded.left-sidenav')
        .controller('CardedLeftSidenavController', CardedLeftSidenavController);

    /** @ngInject */
    function CardedLeftSidenavController($mdSidenav)
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