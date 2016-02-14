(function ()
{
    'use strict';

    angular
        .module('app.components.material-docs')
        .controller('DocTemplateController', DocTemplateController);

    /** @ngInject */
    function DocTemplateController(DEMOS, COMPONENTS, $state, $http, $templateCache)
    {
        var vm = this;
        var component = $state.current.data;
        vm.materialVersion = '1.0.0-rc7';

        vm.componentName = component.name;

        vm.component = getComponent(component.moduleName);

        if ( !component.excludeDemo )
        {
            vm.demo = getDemo(component.moduleName);
        }

        if ( vm.component )
        {
            vm.docs = vm.component.docs;
        }

        if ( vm.demo )
        {
            vm.demos = [];

            angular.forEach(vm.demo.demos, function (demo)
            {
                // Get displayed contents (un-minified)
                var files = [demo.index]
                    .concat(demo.js || [])
                    .concat(demo.css || [])
                    .concat(demo.html || []);
                files.forEach(function (file)
                {
                    file.httpPromise = $http.get('app/main/components/material-docs/' + file.outputPath, {cache: $templateCache})
                        .then(function (response)
                        {
                            file.contents = response.data
                                .replace('<head/>', '');
                            return file.contents;
                        });
                });
                demo.$files = files;
                vm.demos.push(demo);
            });

            vm.demos = vm.demos.sort(function (a, b)
            {
                return a.name > b.name ? 1 : -1;
            });
        }

        // Data

        // Methods

        //////////

        function getDemo(value)
        {
            return DEMOS.filter(function (x)
            {
                return x.moduleName === value;
            })[0];
        }

        function getComponent(value)
        {
            return COMPONENTS.filter(function (x)
            {
                return x.name === value;
            })[0];
        }
    }

})();