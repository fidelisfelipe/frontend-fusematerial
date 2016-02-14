(function ()
{
    'use strict';

    angular
        .module('app.pages.timeline')
        .controller('TimelineController', TimelineController);

    /** @ngInject */
    function TimelineController($q, api, Timeline)
    {
        var vm = this;

        // Data
        vm.timeline = Timeline.data;
        vm.currentPage = 1;
        vm.totalPages = 3;
        vm.pauseScroll = false;

        // Methods
        vm.loadNextPage = loadNextPage;

        //////////

        /**
         * Load next page
         * @returns promise
         */
        function loadNextPage()
        {
            // Create a new deferred object
            var deferred = $q.defer();

            // Increase the current page number
            vm.currentPage = vm.currentPage + 1;

            // Check if we still have pages that we can load
            if ( vm.currentPage > vm.totalPages )
            {
                // Reject the promise
                deferred.reject('No more pages');
            }
            else
            {
                // Emulate the api call and load new timeline items in
                var pageName = 'page' + vm.currentPage;

                api.timeline[pageName].get({},

                    // SUCCESS
                    function (response)
                    {
                        for ( var i = 0; i < response.data.length; i++ )
                        {
                            vm.timeline.push(response.data[i]);
                        }

                        // Resolve the promise
                        deferred.resolve(response);
                    },

                    // ERROR
                    function (response)
                    {
                        // Reject the promise
                        deferred.reject(response);
                    }
                );
            }

            return deferred.promise;
        }
    }
})();
