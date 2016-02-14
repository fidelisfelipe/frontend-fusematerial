(function ()
{
    'use strict';

    angular
        .module('app.components.maps')
        .controller('MapsController', MapsController);

    /** @ngInject */
    function MapsController($state, uiGmapGoogleMapApi)
    {
        var vm = this;

        // Data
        var currentState = $state.current.name;

        switch ( currentState )
        {
            case 'app.components_maps':
                vm.selectedIndex = 0;
                break;

            case 'app.components_maps.satellite':
                vm.selectedIndex = 1;
                break;

            case 'app.components_maps.terrain':
                vm.selectedIndex = 2;
                break;

            case 'app.components_maps.simple-marker':
                vm.selectedIndex = 3;
                break;

            case 'app.components_maps.custom-marker':
                vm.selectedIndex = 4;
                break;

            case 'app.components_maps.info-window':
                vm.selectedIndex = 5;
                break;

            default:
                vm.selectedIndex = 0;
        }

        // Methods

        //////////

        uiGmapGoogleMapApi.then(function (maps)
        {
            vm.simpleMap = {
                center: {
                    latitude : -34.397,
                    longitude: 150.644
                },
                zoom  : 8
            };

            vm.satelliteMap = {
                center : {
                    latitude : -34.397,
                    longitude: 150.644
                },
                zoom   : 8,
                options: {
                    mapTypeId: maps.MapTypeId.SATELLITE
                }
            };

            vm.terrainMap = {
                center : {
                    latitude : -34.397,
                    longitude: 150.644
                },
                zoom   : 8,
                options: {
                    mapTypeId: maps.MapTypeId.TERRAIN
                }
            };

            vm.simpleMarkerMap = {
                center: {
                    latitude : -25.363882,
                    longitude: 131.044922
                },
                zoom  : 8,
                marker: {
                    id    : 0,
                    coords: {
                        latitude : -25.363882,
                        longitude: 131.044922
                    }
                }
            };

            vm.customMarkerMap = {
                center: {
                    latitude : -25.363882,
                    longitude: 131.044922
                },
                zoom  : 8,
                marker: {
                    id     : 0,
                    coords : {
                        latitude : -25.363882,
                        longitude: 131.044922
                    },
                    options: {
                        icon: {
                            anchor: new maps.Point(36, 36),
                            origin: new maps.Point(0, 0),
                            url   : '//google-developers.appspot.com/maps/documentation/javascript/examples/full/images/beachflag.png'
                        }
                    }
                }
            };

        });
    }

})();