(function ()
{
    'use strict';

    angular
        .module('app.dashboards.home', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.dashboards_home', {
            url      : '/dashboard-home',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/home/dashboard-home.html',
                    controller : 'DashboardHomeController as vm'
                }
            },
            resolve  : {
                DashboardData: function (apiResolver)
                {
                    return apiResolver.resolve('dashboard.home@get');
                }
            },
            bodyClass: 'dashboard-home'
        });
    }

})();