(function ()
{
    'use strict';

    angular
        .module('app.ui.theme-colors', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_theme-colors', {
            url      : '/ui/theme-colors',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/ui/theme-colors/theme-colors.html',
                    controller : 'ThemeColorsController as vm'
                }
            },
            bodyClass: 'theme-colors'
        });
    }

})();