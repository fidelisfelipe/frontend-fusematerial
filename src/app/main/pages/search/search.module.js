(function ()
{
    'use strict';

    angular
        .module('app.pages.search', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_search', {
            url      : '/pages/search',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/search/search.html',
                    controller : 'SearchController as vm'
                }
            },
            resolve  : {
                Classic : function (apiResolver)
                {
                    return apiResolver.resolve('search.classic@get');
                },
                Mails   : function (apiResolver)
                {
                    return apiResolver.resolve('search.mails@get');
                },
                Users   : function (apiResolver)
                {
                    return apiResolver.resolve('search.users@get');
                },
                Contacts: function (apiResolver)
                {
                    return apiResolver.resolve('search.contacts@get');
                }
            },
            bodyClass: 'search'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/search');

        // Navigation
        msNavigationServiceProvider.saveItem('pages.search', {
            title : 'Search',
            icon  : 'icon-magnify',
            state : 'app.pages_search',
            weight: 7
        });
    }

})();