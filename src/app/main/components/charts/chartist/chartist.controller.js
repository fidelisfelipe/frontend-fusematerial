(function ()
{
    'use strict';

    angular
        .module('app.components.charts.chartist')
        .controller('ChartistController', ChartistController);

    function ChartistController(fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;


        // line chart
        vm.lineChart = {
            data   : {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                series: [
                    [12, 9, 7, 8, 5],
                    [2, 1, 3.5, 7, 3],
                    [1, 3, 4, 5, 6]
                ]
            },
            options: {
                fullWidth   : true,
                chartPadding: {
                    right: 40
                }
            }
        };

        // line Area chart
        vm.lineAreaChart = {
            data   : {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: [
                    [5, 9, 7, 8, 5, 3, 5, 4]
                ]
            },
            options: {
                low     : 0,
                showArea: true
            }
        };

        vm.biPolarLineChart = {
            data   : {
                labels: [1, 2, 3, 4, 5, 6, 7, 8],
                series: [
                    [1, 2, 3, 1, -2, 0, 1, 0],
                    [-2, -1, -2, -1, -2.5, -1, -2, -1],
                    [0, 0, 0, 1, 2, 2.5, 2, 1],
                    [2.5, 2, 1, 0.5, 1, 0.5, -1, -2.5]
                ]
            },
            options: {
                high     : 3,
                low      : -3,
                showArea : true,
                showLine : false,
                showPoint: false,
                fullWidth: true,
                axisX    : {
                    showLabel: false,
                    showGrid : false
                }
            }
        };

        vm.stackedBarChart = {
            data   : {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                series: [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                ]
            },
            options: {
                stackBars: true,
                axisY    : {
                    labelInterpolationFnc: function (value)
                    {
                        return (value / 1000) + 'k';
                    }
                }
            },
            events : {
                draw: function (data)
                {
                    if ( data.type === 'bar' )
                    {
                        data.element.attr({
                            style: 'stroke-width: 30px'
                        });
                    }
                }
            }
        };

        // bar chart
        vm.barChart = {
            data             : {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                series: [
                    [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
                    [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
                ]
            },
            options          : {
                seriesBarDistance: 15
            },
            responsiveOptions: [
                ['screen and (min-width: 641px) and (max-width: 1024px)', {
                    seriesBarDistance: 10,
                    axisX            : {
                        labelInterpolationFnc: function (value)
                        {
                            return value;
                        }
                    }
                }],
                ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX            : {
                        labelInterpolationFnc: function (value)
                        {
                            return value[0];
                        }
                    }
                }]
            ]
        };

        // Horizontal bar chart
        vm.horizontalBarChart = {
            data   : {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                series: [
                    [5, 4, 3, 7, 5, 10, 3],
                    [3, 2, 9, 5, 4, 6, 4]
                ]
            },
            options: {
                seriesBarDistance: 10,
                reverseData      : true,
                horizontalBars   : true,
                axisY            : {
                    offset: 70
                }
            }
        };

        vm.biPolarBarChart = {
            data   : {
                labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
                series: [
                    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
                ]
            },
            options: {
                high : 10,
                low  : -10,
                axisX: {
                    labelInterpolationFnc: function (value, index)
                    {
                        return index % 2 === 0 ? value : null;
                    }
                }
            }
        };

        // pie chart
        vm.pieChart = {
            data             : {
                labels: ['Bananas', 'Apples', 'Grapes'],
                series: [20, 15, 40]
            },
            options          : {
                labelInterpolationFnc: function (value)
                {
                    return value[0];
                }
            },
            responsiveOptions: [
                ['screen and (min-width: 640px)', {
                    chartPadding         : 40,
                    labelOffset          : 150,
                    labelDirection       : 'explode',
                    labelInterpolationFnc: function (value)
                    {
                        return value;
                    }
                }],
                ['screen and (min-width: 1024px)', {
                    labelOffset : 120,
                    chartPadding: 30
                }]
            ]

        };

        // donut chart
        vm.donutChart = {
            data   : {
                series: [20, 10, 30, 40]
            },
            options: {
                donut: true
            }
        };

        vm.gaugeChart = {
            data   : {
                series: [20, 10, 30, 40]
            },
            options: {
                donut     : true,
                donutWidth: 60,
                startAngle: 270,
                total     : 200,
                showLabel : true
            }
        };
        // Methods

        //////////

    }

})();