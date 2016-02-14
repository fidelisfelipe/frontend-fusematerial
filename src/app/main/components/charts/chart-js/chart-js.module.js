(function ()
{
    'use strict';

    angular
        .module('app.components.charts.chart-js', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_charts_chart-js', {
            url  : '/components/charts/chart-js',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/charts/chart-js/chart-js.html',
                    controller : 'ChartJsController as vm'
                }
            }
        });
    }

})();