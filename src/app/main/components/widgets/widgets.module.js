(function ()
{
    'use strict';

    angular
        .module('app.components.widgets', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_widgets', {
            url  : '/components/widgets',
            views: {
                'content@app': {
                    templateUrl: 'app/main/components/widgets/widgets.html',
                    controller : 'WidgetsController as vm'
                }
            }
        });
    }

})();