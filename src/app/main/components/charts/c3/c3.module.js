(function ()
{
    'use strict';

    angular
        .module('app.components.charts.c3', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_charts_c3', {
            url  : '/components/charts/c3',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/charts/c3/c3.html',
                    controller : 'C3Controller as vm'
                }
            }
        });
    }

})();