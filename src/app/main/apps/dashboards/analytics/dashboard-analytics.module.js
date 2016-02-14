(function ()
{
    'use strict';

    angular
        .module('app.dashboards.analytics', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.dashboards_analytics', {
            url      : '/dashboard-analytics',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/analytics/dashboard-analytics.html',
                    controller : 'DashboardAnalyticsController as vm'
                }
            },
            resolve  : {
                DashboardData: function (apiResolver)
                {
                    return apiResolver.resolve('dashboard.analytics@get');
                }
            },
            bodyClass: 'dashboard-analytics'
        });
    }

})();