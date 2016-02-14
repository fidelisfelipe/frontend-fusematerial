(function ()
{
    'use strict';

    angular
        .module('app.dashboards.server', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.dashboards_server', {
            url      : '/dashboard-server',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/server/dashboard-server.html',
                    controller : 'DashboardServerController as vm'
                }
            },
            resolve  : {
                DashboardData: function (apiResolver)
                {
                    return apiResolver.resolve('dashboard.server@get');
                }
            },
            bodyClass: 'dashboard-server'
        });
    }

})();