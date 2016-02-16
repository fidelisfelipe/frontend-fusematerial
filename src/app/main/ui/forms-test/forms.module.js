(function ()
{
    'use strict';

    angular
        .module('app.ui.formswizard.test', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.ui_forms_wizard_test', {
            url      : '/ui/forms/test',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/ui/forms-test/forms.html',
                    controller : 'FormsTestController as vm'
                }
            },
            bodyClass: 'forms'
        });
    }

})();