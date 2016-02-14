(function ()
{
    'use strict';

    angular
        .module('app.ui.page-layouts.blank', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_page-layouts_blank', {
            url  : '/ui/page-layouts/blank',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/page-layouts/blank/blank.html',
                    controller : 'BlankController as vm'
                }
            }
        });
    }

})();