(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.carded.left-sidenav-ii')
        .controller('CardedLeftSidenavIIController', CardedLeftSidenavIIController);

    /** @ngInject */
    function CardedLeftSidenavIIController($mdSidenav)
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