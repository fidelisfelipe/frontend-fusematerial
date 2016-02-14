(function ()
{
    'use strict';

    angular
        .module('app.pages.error-404', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_errors_error-404', {
            url      : '/pages/errors/error-404',
            views    : {
                'main@'                             : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_errors_error-404': {
                    templateUrl: 'app/main/pages/errors/404/error-404.html',
                    controller : 'Error404Controller as vm'
                }
            },
            bodyClass: 'error-404'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/errors/404');

        // Navigation
        msNavigationServiceProvider.saveItem('pages.errors', {
            title : 'Errors',
            icon  : 'icon-alert',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('pages.errors.error-404', {
            title : '404',
            state : 'app.pages_errors_error-404',
            weight: 1
        });
    }

})();