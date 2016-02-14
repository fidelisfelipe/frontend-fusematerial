(function ()
{
    'use strict';

    angular
        .module('app.components.charts.chart-js')
        .controller('ChartJsController', ChartJsController);

    function ChartJsController(fuseTheming)
    {
        var vm = this;

        // Data
        vm.themes = fuseTheming.themes;

        vm.lineChart = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            series: ['Series A', 'Series B'],
            data  : [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ]
        };

        vm.barChart = {
            labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
            series: ['Series A', 'Series B'],
            data  : [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ]
        };

        vm.doughnutChart = {
            labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
            data  : [300, 500, 100]
        };

        vm.radarChart = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            data  : [
                [65, 59, 90, 81, 56, 55, 40],
                [28, 48, 40, 19, 96, 27, 100]
            ]
        };

        vm.pieChart = {
            labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
            data  : [300, 500, 100]
        };

        vm.polarChart = {
            labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Tele Sales', 'Corporate Sales'],
            data  : [300, 500, 100, 40, 120]
        };

        // Methods

        //////////

    }

})();