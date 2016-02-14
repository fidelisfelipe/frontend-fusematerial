(function ()
{
    'use strict';

    angular
        .module('app.components.maps', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        $stateProvider
            .state('app.components_maps', {
                url  : '/components/maps',
                views: {
                    'content@app'                   : {
                        templateUrl: 'app/main/components/maps/maps.html',
                        controller : 'MapsController as vm'
                    },
                    'tabContent@app.components_maps': {
                        templateUrl: 'app/main/components/maps/tabs/simple.html'
                    }
                }
            })

            .state('app.components_maps.satellite', {
                url  : '/satellite',
                views: {
                    'tabContent': {
                        templateUrl: 'app/main/components/maps/tabs/satellite.html'
                    }
                }
            })

            .state('app.components_maps.terrain', {
                url  : '/terrain',
                views: {
                    'tabContent': {
                        templateUrl: 'app/main/components/maps/tabs/terrain.html'
                    }
                }
            })

            .state('app.components_maps.simple-marker', {
                url  : '/simple-marker',
                views: {
                    'tabContent': {
                        templateUrl: 'app/main/components/maps/tabs/simple-marker.html'
                    }
                }
            })

            .state('app.components_maps.custom-marker', {
                url  : '/custom-marker',
                views: {
                    'tabContent': {
                        templateUrl: 'app/main/components/maps/tabs/custom-marker.html'
                    }
                }
            })

            .state('app.components_maps.info-window', {
                url  : '/info-window',
                views: {
                    'tabContent': {
                        templateUrl: 'app/main/components/maps/tabs/info-window.html'
                    }
                }
            });
    }

})();