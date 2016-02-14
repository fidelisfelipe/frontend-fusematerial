(function ()
{
    'use strict';

    angular
        .module('app.components.cards')
        .controller('CardsController', CardsController);

    /** @ngInject */
    function CardsController(Cards)
    {
        var vm = this;

        // Data
        vm.cards = Cards.data;

        // Methods

        //////////
    }

})();