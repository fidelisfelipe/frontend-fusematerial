(function ()
{
    'use strict';

    angular
        .module('app.pages.maintenance', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_maintenance', {
            url      : '/pages/maintenance',
            views    : {
                'main@'                        : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_maintenance': {
                    templateUrl: 'app/main/pages/maintenance/maintenance.html',
                    controller : 'MaintenanceController as vm'
                }
            },
            bodyClass: 'maintenance'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/maintenance');

        // Navigation
        msNavigationServiceProvider.saveItem('pages.maintenance', {
            title : 'Maintenance',
            icon  : 'icon-oil',
            state : 'app.pages_maintenance',
            weight: 5
        });
    }

})();