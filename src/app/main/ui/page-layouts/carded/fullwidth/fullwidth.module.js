(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.carded.fullwidth', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_carded_fullwidth', {
            url  : '/ui/page-layouts/carded/fullwidth',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/carded/fullwidth/fullwidth.html',
                    controller : 'CardedFullwidthController as vm'
                }
            }
        });
    }

})();