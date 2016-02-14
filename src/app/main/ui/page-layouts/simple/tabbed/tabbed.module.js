(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.simple.tabbed', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_simple_tabbed', {
            url  : '/ui/page-layouts/simple/tabbed',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/simple/tabbed/tabbed.html',
                    controller : 'SimpleTabbedController as vm'
                }
            }
        });
    }

})();