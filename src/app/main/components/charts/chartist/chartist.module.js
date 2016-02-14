(function ()
{
    'use strict';

    angular
        .module('app.components.charts.chartist', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_charts_chartist', {
            url  : '/components/charts/chartist',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/charts/chartist/chartist.html',
                    controller : 'ChartistController as vm'
                }
            }
        });
    }

})();