(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.simple.left-sidenav-ii', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_simple_left-sidenav-ii', {
            url  : '/ui/page-layouts/simple/left-sidenav-ii',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/simple/left-sidenav-ii/left-sidenav-ii.html',
                    controller : 'SimpleLeftSidenavIIController as vm'
                }
            }
        });
    }

})();