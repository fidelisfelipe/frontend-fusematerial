(function ()
{
    'use strict';
    angular
        .module('app.components.material-docs')
        .factory('$demoAngularScripts', DemoAngularScripts);

    function DemoAngularScripts()
    {
        var scripts = [
            'angular.js',
            'angular-animate.min.js',
            'angular-route.min.js',
            'angular-aria.min.js',
            'angular-messages.min.js'
        ];

        return {
            all: allAngularScripts
        };

        function allAngularScripts()
        {
            return scripts.map(fullPathToScript);
        }

        function fullPathToScript(script)
        {
            return "https://ajax.googleapis.com/ajax/libs/angularjs/" + angular.version.full + "/" + script;
        }
    }
})();
