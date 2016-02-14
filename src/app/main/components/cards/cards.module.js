(function ()
{
    'use strict';

    angular
        .module('app.components.cards', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider.state('app.components_cards', {
            url    : '/components/cards',
            views  : {
                'content@app': {
                    templateUrl: 'app/main/components/cards/cards.html',
                    controller : 'CardsController as vm'
                }
            },
            resolve: {
                Cards: function (apiResolver)
                {
                    return apiResolver.resolve('cards@get');
                }
            }
        });
    }

})();