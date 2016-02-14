(function ()
{
    'use strict';

    angular
        .module('app.ui.forms', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_forms', {
            url      : '/ui/forms',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/ui/forms/forms.html',
                    controller : 'FormsController as vm'
                }
            },
            bodyClass: 'forms'
        });
    }

})();