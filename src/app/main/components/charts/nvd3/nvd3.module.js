(function ()
{
    'use strict';

    angular
        .module('app.components.charts.nvd3', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_charts_nvd3', {
            url  : '/components/charts/nvd3',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/charts/nvd3/nvd3.html',
                    controller : 'Nvd3Controller as vm'
                }
            }
        });
    }

})();