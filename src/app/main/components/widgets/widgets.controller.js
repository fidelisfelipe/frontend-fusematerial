(function ()
{
    'use strict';

    angular
        .module('app.components.widgets')
        .controller('WidgetsController', WidgetsController);

    /** @ngInject */
    function WidgetsController()
    {
        var vm = this;

        // Data
        vm.widget1 = {
            title        : 'WEEKLY TRANSACTIONS',
            value        : 30342,
            lastWeekValue: 30002,
            lastWeekDiff : '+ 1,12%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget2 = {
            title        : 'SALES QUOTA',
            value        : 40,
            lastWeekValue: 85,
            lastWeekDiff : '- 45%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget3 = {
            title : 'BOUNCE RATE',
            value : 80,
            detail: 'This is the back side. You can show detailed information here.'
        };

        vm.widget4 = {
            title        : 'STOCK COUNT',
            value        : 5583,
            lastWeekValue: 5583,
            lastWeekDiff : '- 0%',
            detail       : 'This is the back side. You can show detailed information here.'
        };

        vm.widget5 = {
            title: 'USERS ONLINE',
            value: 658
        };

        vm.widget6 = {
            title: 'WASTELANDERS',
            value: 358
        };

        vm.widget7 = {
            title: 'VAULTS SEALED',
            value: 24
        };

        vm.widget8 = {
            title: 'VAULTS OPEN',
            value: 62
        };

        vm.widget9 = {
            title: 'SONGS',
            value: 210
        };

        vm.widget10 = {
            title: 'VIDEOS',
            value: 54
        };

        vm.widget11 = {
            title: 'DOCUMENTS',
            value: 1252
        };

        vm.widget12 = {
            date       : 'June 27, Saturday',
            temperature: 28,
            event      : 'Sunny',
            icon       : 'icon-weather-cloudy',
            location   : 'New York, NY',
            detail     : [
                {
                    day        : 'Sun',
                    icon       : 'icon-weather-rainy',
                    temperature: 24,
                    event      : 'Rainy'
                },
                {
                    day        : 'Mon',
                    icon       : 'icon-weather-pouring',
                    temperature: 23,
                    event      : 'Rainy'
                },
                {
                    day        : 'Tue',
                    icon       : 'icon-weather-cloudy',
                    temperature: 29,
                    event      : 'Overcast'
                },
                {
                    day        : 'Wed',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 28,
                    event      : 'Sunny'
                },
                {
                    day        : 'Thu',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 31,
                    event      : 'Sunny'
                }
            ]
        };

        vm.widget13 = {
            date       : 'June 28, Saturday',
            temperature: 16,
            event      : 'Rainy',
            icon       : 'icon-weather-rainy',
            location   : 'Moscow',
            detail     : [
                {
                    day        : 'Sun',
                    icon       : 'icon-weather-rainy',
                    temperature: 24,
                    event      : 'Rainy'
                },
                {
                    day        : 'Mon',
                    icon       : 'icon-weather-pouring',
                    temperature: 23,
                    event      : 'Rainy'
                },
                {
                    day        : 'Tue',
                    icon       : 'icon-weather-cloudy',
                    temperature: 29,
                    event      : 'Overcast'
                },
                {
                    day        : 'Wed',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 28,
                    event      : 'Sunny'
                },
                {
                    day        : 'Thu',
                    icon       : 'icon-weather-partlycloudy',
                    temperature: 31,
                    event      : 'Sunny'
                }
            ]
        };

        vm.widget14 = {
            title: 'Visitor Demographics',
            tabs : [
                {
                    label : '30 days',
                    groups: [
                        {
                            title: 'Genders',
                            data : [
                                {
                                    title: 'Male',
                                    value: 40
                                },
                                {
                                    title: 'Female',
                                    value: 41
                                }
                            ]
                        },
                        {
                            title: 'Age',
                            data : [
                                {
                                    title: '25 - 34',
                                    value: 32
                                },
                                {
                                    title: '35 - 44',
                                    value: 85
                                }
                            ]
                        }
                    ]
                },
                {
                    label : '10 days',
                    groups: [
                        {
                            title: 'Genders',
                            data : [
                                {
                                    title: 'Male',
                                    value: 32
                                },
                                {
                                    title: 'Female',
                                    value: 49
                                }
                            ]
                        },
                        {
                            title: 'Age',
                            data : [
                                {
                                    title: '25 - 34',
                                    value: 85
                                },
                                {
                                    title: '35 - 44',
                                    value: 60
                                }
                            ]
                        }
                    ]
                },
                {
                    label : '1 day',
                    groups: [
                        {
                            title: 'Genders',
                            data : [
                                {
                                    title: 'Male',
                                    value: 28
                                },
                                {
                                    title: 'Female',
                                    value: 60
                                }
                            ]
                        },
                        {
                            title: 'Age',
                            data : [
                                {
                                    title: '25 - 34',
                                    value: 17
                                },
                                {
                                    title: '35 - 44',
                                    value: 64
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        vm.widget15 = {
            title: 'CPU USAGE',
            value: 200,
            chart: {
                columns: [
                    {
                        id    : 'CPU',
                        name  : 'CPU',
                        color : 'white',
                        values: '30,200,100,400,150,250',
                        type  : 'spline'
                    }
                ]
            }
        };

        vm.widget16 = {
            title        : 'STOCK COUNT',
            value        : 5583,
            lastWeekValue: 5583,
            lastWeekDiff : '- 0%',
            chart        : {
                columns: [
                    {
                        id    : 'STOCK',
                        name  : 'STOCK',
                        color : 'purple',
                        values: '30,200,100,400,150,250',
                        type  : 'area'
                    }
                ]
            }
        };

        vm.widget17 = {
            title   : 'IO RATE',
            subtitle: 'Showing last 5 hours',
            chart   : {
                columns: [
                    {
                        id    : 'Input',
                        name  : 'Input',
                        color : 'green',
                        values: '30,75,290,400,150,250',
                        type  : 'spline'
                    },
                    {
                        id    : 'Output',
                        name  : 'Output',
                        color : 'blue',
                        values: '500,300,120,600,50,80',
                        type  : 'spline'
                    }
                ]
            }
        };

        vm.widget18 = {
            title        : 'WEEKLY VISITORS',
            value        : 30342,
            lastWeekValue: 30002,
            lastWeekDiff : '1.12%',
            chart        : {
                columns: [
                    {
                        id    : 'Visitors',
                        name  : 'Visitors',
                        color : 'steelblue',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    }
                ]
            }
        };

        vm.widget19 = {
            title   : 'Google Inc.',
            subtitle: 'NASDAQ: GOOG',
            value   : '531.69',
            diff    : '2.29%',
            chart   : {
                columns: [
                    {
                        id    : 'GOOG',
                        name  : 'GOOG',
                        color : 'white',
                        values: '30,75,290,400,150,250,75,210,125,92,30,75,290,400',
                        type  : 'bar'
                    }
                ]
            }
        };

        // Methods

        //////////
    }

})();