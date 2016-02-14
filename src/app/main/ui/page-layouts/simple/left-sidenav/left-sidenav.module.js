(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.simple.left-sidenav', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_simple_left-sidenav', {
            url  : '/ui/page-layouts/simple/left-sidenav',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/simple/left-sidenav/left-sidenav.html',
                    controller : 'SimpleLeftSidenavController as vm'
                }
            }
        });
    }

})();