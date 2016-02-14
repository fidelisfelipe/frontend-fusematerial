(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('ScrumboardController', ScrumboardController);

    /** @ngInject */
    function ScrumboardController($window, $mdSidenav, BoardService, BoardList, CardFilters)
    {
        var vm = this;

        // Data
        vm.currentView = 'board';
        vm.board = BoardService.data;
        vm.boardList = BoardList.data;
        vm.boardSelectorVisible = false;

        // Methods
        vm.toggleSidenav = toggleSidenav;
        vm.updateBoardUri = updateBoardUri;
        vm.clearFilters = CardFilters.clear;
        vm.filteringIsOn = CardFilters.isOn;

        ////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            // IE list-content max-height hack
            if ( angular.element('html').hasClass('explorer') )
            {
                // Calculate the height for the first time
                calculateListContentHeight();

                // Attach calculateListContentHeight function to window resize
                $window.onresize = function ()
                {
                    calculateListContentHeight();
                }
            }
        }

        /**
         * IE ONLY
         * Calculate the list-content height
         * IE ONLY
         */
        function calculateListContentHeight()
        {
            // Get the required heights for calculations
            var listWrapperEl = angular.element('#board .list-wrapper').first(),
                listWrapperElHeight = listWrapperEl.height(),
                listHeaderElHeight = listWrapperEl.find('.list-header').height(),
                listFooterElHeight = listWrapperEl.find('.list-footer').height();

            // Calculate the max height
            var maxHeight = listWrapperElHeight - listHeaderElHeight - listFooterElHeight;

            // Add the max height
            angular.element('#board .list-content').css({'max-height': maxHeight});
        }

        /**
         * Update Board Uri
         *
         * Once you connect your app to your server,
         * you would do this on your API server.
         */
        function updateBoardUri()
        {
            if ( vm.boardList.getById(vm.board.id) )
            {
                vm.boardList.getById(vm.board.id).name = vm.board.name;
                vm.boardList.getById(vm.board.id).uri = vm.board.uri = encodeURIComponent(vm.board.name).replace(/%20/g, '-').toLowerCase();
            }
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Array prototype
         *
         * Get by id
         *
         * @param value
         * @returns {T}
         */
        Array.prototype.getById = function (value)
        {
            return this.filter(function (x)
            {
                return x.id === value;
            })[0];
        }

    }
})();