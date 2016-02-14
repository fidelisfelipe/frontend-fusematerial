(function ()
{
    'use strict';

    angular
        .module('app.ui.icons', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_icons', {
            url      : '/ui/icons',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/ui/icons/icons.html',
                    controller : 'IconsController as vm'
                }
            },
            resolve  : {
                Icons: function (apiResolver)
                {
                    return apiResolver.resolve('icons@get');
                }
            },
            bodyClass: 'icons'
        });
    }

})();