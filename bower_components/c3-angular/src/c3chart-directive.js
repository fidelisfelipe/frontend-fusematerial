angular.module('gridshore.c3js.chart')
    .directive('c3chart', ['$timeout', function(timeout) {
        return C3Chart(timeout);
    }]);

/**
 * @ngdoc directive
 * @name C3Chart
 * @description
 *   `c3chart` is the main directive to create the chart. Use it to set the padding properties and include the other directives. You can also register the callback in this directive that receives the initialised chart object.
 *
 *   When using multiple charts in the same page you need to provide unique bind-id parameters.
 * 
 * Restrict To:
 *   Element
 *
 * Parent Element:
 *   -
 *
 * @param {Number} padding-top Set the top padding of the chart.
 *   
 *   {@link http://c3js.org/reference.html#padding-top| c3js doc}
 * 
 * @param {Number} padding-bottom Set the bottom padding of the chart.
 *
 *   {@link http://c3js.org/reference.html#padding-bottom| c3js doc}
 * @param {Number} padding-right Set the right padding of the chart.
 * 
 *   {@link http://c3js.org/reference.html#padding-right| c3js doc}
 *
 * @param {Number} padding-left Set the left padding of the chart.
 * 
 *   {@link http://c3js.org/reference.html#padding-left| c3js doc}
 *
 * @param {String} bind-id Id of the chart, needs to be unique when using multiple charts on one page.
 * 
 *   {@link http://c3js.org/reference.html#bindto| c3js doc}
 *
 * @param {String} sort-data You can enter three different versions: asc, desc, null. Using this sorting you can change the order of stacking and the order of the pieces of a pie or donut.
 * 
 *   {@link http://c3js.org/reference.html#data-order| c3js doc}
 *
 * @param {Boolean} show-labels Configure to show the labels 'true' or not, default is false.
 * 
 *   {@link http://c3js.org/reference.html#data-labels| c3js doc}
 *
 * @param {Function} labels-format-function Provide a function to format the labels.
 * 
 *   {@link http://c3js.org/reference.html#data-labels-format| c3js doc}
 *
 * @param {Boolean} show-subchart Configure to show the subchart or not (default).
 * 
 *   {@link http://c3js.org/reference.html#subchart-show| c3js doc}
 *
 * @param {Boolean} enable-zoom Configure to enable zoom in the chart or not (defaut).
 * 
 *   {@link http://c3js.org/reference.html#subchart-show| c3js doc}
 *
 * @param {Boolean} enable-zoom Configure to enable zoom in the chart or not (defaut).
 * 
 *   {@link http://c3js.org/reference.html#subchart-show| c3js doc}
 *
 * @param {Array} chart-data Provide a reference to a collection that can contain dynamic data. When providing this attrbiute you also need to provide the chart-columns attribute.
 * 
 *   Array consisting of objects with values for the different columns: [{"data1":10,"data2":20},{"data1":50,"data2":60}]
 *
 * @param {Array} chart-columns Provide a reference to a collection that contains the columns. When providing this attrbiute you also need to provide the chart-data attribute.
 * 
 *   Array consisting of objects with some properties for the different columns: [{"id": "data1", "type": "line"}, {"id": "data2", "type": "bar"}]
 *
 * @param {Object} chart-x Provide information about the x column. Used when adding dynamic data to specify the field that contains the x data value.
 * 
 *   Object containing reference to the id of the x data field: {"id": "x", "name": "My Data points"}
 *
 * @param {Function} callback-function Use this if you want to interact with the chart object using the api
 * 
 *   {@link http://c3js.org/reference.html#api-focus| c3js doc}
 *
 * @example
 * Usage:
 *   <c3chart >
 *      <!-- sub elements -->
 *   </c3chart>
 * 
 * Example:
 *
 *   {@link http://jettro.github.io/c3-angular-directive/#examples}
 * 
 * Shows how to use dynamic data points.
 * 
 * <c3chart bindto-id="dynamicpie" chart-data="piePoints" chart-columns="pieColumns"/>
 * 
 *     $scope.piePoints = [{"data1": 70, "data2": 30, "data3": "100"}];
 *     $scope.pieColumns = [{"id": "data1", "type": "pie"}, {"id": "data2", "type": "pie"}, {
 *       "id": "data3",
 *       "type": "pie"
 *
 * Show how to register a callback function and use it. The screen contains a button to toggle the legend visibility.
 *
 * <c3chart bindto-id="dynamicpie" chart-data="piePoints" chart-columns="pieColumns"
 *        callback-function="handleCallback"/>
 *
 *     $scope.handleCallback = function (chartObj) {
 *       $scope.theChart = chartObj;
 *   };
 *
 *   $scope.legendIsShown = true;
 *   $scope.toggleLegend = function() {
 *       if ($scope.legendIsShown) {
 *           $scope.theChart.legend.hide();
 *       } else {
 *           $scope.theChart.legend.show();
 *       }
 *       $scope.legendIsShown= !$scope.legendIsShown;
 *       $scope.theChart.flush();
 *   };
 */
function C3Chart ($timeout) {
    var chartLinker = function (scope, element, attrs, chartCtrl) {
        var paddingTop = attrs.paddingTop;
        var paddingRight = attrs.paddingRight;
        var paddingBottom = attrs.paddingBottom;
        var paddingLeft = attrs.paddingLeft;
        var sortData = attrs.sortData;

        if (paddingTop) {
            chartCtrl.addPadding('top', paddingTop);
        }
        if (paddingRight) {
            chartCtrl.addPadding('right', paddingRight);
        }
        if (paddingBottom) {
            chartCtrl.addPadding('bottom', paddingBottom);
        }
        if (paddingLeft) {
            chartCtrl.addPadding('left', paddingLeft);
        }
        if (sortData) {
            chartCtrl.addSorting(sortData);
        }
        if (attrs.labelsFormatFunction) {
            chartCtrl.addDataLabelsFormatFunction(scope.labelsFormatFunction());
        }
        if (attrs.callbackFunction) {
            chartCtrl.addChartCallbackFunction(scope.callbackFunction());
        }
        // Trick to wait for all rendering of the DOM to be finished.
        $timeout(function () {
            chartCtrl.showGraph();
        });
    };

    return {
        "restrict": "E",
        "controller": "ChartController",
        "scope": {
            "bindto": "@bindtoId",
            "showLabels": "@showLabels",
            "labelsFormatFunction": "&",
            "showSubchart": "@showSubchart",
            "enableZoom": "@enableZoom",
            "chartData": "=chartData",
            "chartColumns": "=chartColumns",
            "chartX": "=chartX",
            "callbackFunction": "&"
        },
        "template": "<div><div id='{{bindto}}'></div><div ng-transclude></div></div>",
        "replace": true,
        "transclude": true,
        "link": chartLinker
    };
}
