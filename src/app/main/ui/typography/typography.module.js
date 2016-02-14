(function ()
{
    'use strict';

    angular
        .module('app.ui.typography', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_typography', {
            url      : '/ui/typography',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/ui/typography/typography.html',
                    controller : 'TypographyController as vm'
                }
            },
            bodyClass: 'typography'
        });
    }

})();