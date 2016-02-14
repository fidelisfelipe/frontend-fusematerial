(function ()
{
    'use strict';

    angular
        .module('app.pages.invoice', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.pages_invoice', {
            url      : '/pages/invoice',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/pages/invoice/invoice.html',
                    controller : 'InvoiceController as vm'
                }
            },
            resolve  : {
                Invoice: function (apiResolver)
                {
                    return apiResolver.resolve('invoice@get');
                }
            },
            bodyClass: 'invoice printable'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/pages/invoice');

        // Navigation
        msNavigationServiceProvider.saveItem('pages.invoice', {
            title : 'Invoice',
            icon  : 'icon-receipt',
            state : 'app.pages_invoice',
            weight: 4
        });
    }

})();