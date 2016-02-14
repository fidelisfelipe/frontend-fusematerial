(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.carded.right-sidenav-ii', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_carded_right-sidenav-ii', {
            url  : '/ui/page-layouts/carded/right-sidenav-ii',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/carded/right-sidenav-ii/right-sidenav-ii.html',
                    controller : 'CardedRightSidenavIIController as vm'
                }
            }
        });
    }

})();