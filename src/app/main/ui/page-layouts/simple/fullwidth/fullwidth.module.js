(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.simple.fullwidth', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_simple_fullwidth', {
            url  : '/ui/page-layouts/simple/fullwidth',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/simple/fullwidth/fullwidth.html',
                    controller : 'SimpleFullwidthController as vm'
                }
            }
        });
    }

})();