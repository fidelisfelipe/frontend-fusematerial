(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.carded.right-sidenav', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_carded_right-sidenav', {
            url  : '/ui/page-layouts/carded/right-sidenav',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/carded/right-sidenav/right-sidenav.html',
                    controller : 'CardedRightSidenavController as vm'
                }
            }
        });
    }

})();