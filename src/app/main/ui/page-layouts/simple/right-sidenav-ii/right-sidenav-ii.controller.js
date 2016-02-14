(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.simple.right-sidenav-ii')
        .controller('SimpleRightSidenavIIController', SimpleRightSidenavIIController);

    /** @ngInject */
    function SimpleRightSidenavIIController($mdSidenav)
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