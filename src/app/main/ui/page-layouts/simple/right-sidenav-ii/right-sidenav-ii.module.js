(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.simple.right-sidenav-ii', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_simple_right-sidenav-ii', {
            url  : '/ui/page-layouts/simple/right-sidenav-ii',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/simple/right-sidenav-ii/right-sidenav-ii.html',
                    controller : 'SimpleRightSidenavIIController as vm'
                }
            }
        });
    }

})();