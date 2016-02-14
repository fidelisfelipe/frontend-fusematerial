(function ()
{
    'use strict';

    angular
        .module('app.pages.auth.register-v2', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_auth_register-v2', {
            url      : '/pages/auth/register-v2',
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.pages_auth_register-v2': {
                    templateUrl: 'app/main/pages/auth/register-v2/register-v2.html',
                    controller : 'RegisterV2Controller as vm'
                }
            },
            bodyClass: 'register-v2'
        });

        // Translate
        $translatePartialLoaderProvider.addPart('app/main/pages/auth/register-v2');

        // Navigation
        msNavigationServiceProvider.saveItem('pages.auth.register-v2', {
            title : 'Register v2',
            state : 'app.pages_auth_register-v2',
            weight: 4
        });
    }

})();