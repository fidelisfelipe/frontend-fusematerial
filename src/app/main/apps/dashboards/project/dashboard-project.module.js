(function ()
{
    'use strict';

    angular
        .module('app.dashboards.project', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider.state('app.dashboards_project', {
            url      : '/dashboard-project',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/dashboards/project/dashboard-project.html',
                    controller : 'DashboardProjectController as vm'
                }
            },
            resolve  : {
                DashboardData: function (apiResolver)
                {
                    return apiResolver.resolve('dashboard.project@get');
                }
            },
            bodyClass: 'dashboard-project'
        });
    }

})();