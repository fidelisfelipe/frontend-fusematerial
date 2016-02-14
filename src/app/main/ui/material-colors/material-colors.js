(function ()
{
    'use strict';

    angular
        .module('app.ui.material-colors', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_material-colors', {
            url  : '/ui/material-colors',
            views: {
                'content@app': {
                    templateUrl: 'app/main/ui/material-colors/material-colors.html',
                    controller : 'MaterialColorsController as vm'
                }
            }
        });
    }

})();