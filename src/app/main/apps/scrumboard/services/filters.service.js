(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .factory('CardFilters', CardFiltersService);

    /** @ngInject */
    function CardFiltersService()
    {
        var service = {
            name   : '',
            labels : [],
            members: [],
            clear  : clear,
            isOn   : isOn
        };

        /**
         * Clear
         */
        function clear()
        {
            service.name = '';
            service.labels = [];
            service.members = [];
        }

        /**
         * Is on
         *
         * @returns {boolean}
         */
        function isOn()
        {
            return (service.name === '' && service.labels.length === 0 && service.members.length === 0 ) ? false : true;
        }

        return service;
    }
})();