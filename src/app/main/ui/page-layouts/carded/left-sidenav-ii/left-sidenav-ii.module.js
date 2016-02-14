(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.carded.left-sidenav-ii', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_carded_left-sidenav-ii', {
            url  : '/ui/page-layouts/carded/left-sidenav-ii',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/carded/left-sidenav-ii/left-sidenav-ii.html',
                    controller : 'CardedLeftSidenavIIController as vm'
                }
            }
        });
    }

})();