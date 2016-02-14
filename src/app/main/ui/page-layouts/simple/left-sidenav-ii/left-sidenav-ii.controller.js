(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.simple.left-sidenav-ii')
        .controller('SimpleLeftSidenavIIController', SimpleLeftSidenavIIController);

    /** @ngInject */
    function SimpleLeftSidenavIIController($mdSidenav)
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