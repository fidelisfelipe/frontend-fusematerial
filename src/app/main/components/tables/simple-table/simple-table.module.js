(function ()
{
    'use strict';

    angular
        .module('app.components.tables.simple-table', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_tables_simple-table', {
            url  : '/components/table/simple-table',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/tables/simple-table/simple-table.html',
                    controller : 'SimpleTableController as vm'
                }
            },
            resolve: {
                Employees: function (apiResolver)
                {
                    return apiResolver.resolve('tables.employees@get');
                }
            }
        });
    }

})();