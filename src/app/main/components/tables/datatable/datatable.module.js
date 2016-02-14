(function ()
{
    'use strict';

    angular
        .module('app.components.tables.datatable', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_tables_datatable', {
            url    : '/components/table/datatable',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/components/tables/datatable/datatable.html',
                    controller : 'DatatableController as vm'
                }
            },
            resolve: {
                Employees: function (apiResolver)
                {
                    return apiResolver.resolve('tables.employees100@get');
                }
            }
        });
    }

})();