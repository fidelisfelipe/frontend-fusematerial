(function ()
{
    'use strict';

    angular
        .module('app.todo', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider, msNavigationServiceProvider)
    {
        // State
        $stateProvider.state('app.to-do', {
            url      : '/to-do',
            views    : {
                'content@app': {
                    templateUrl: 'app/main/apps/todo/todo.html',
                    controller : 'TodoController as vm'
                }
            },
            resolve  : {
                Tasks: function (apiResolver)
                {
                    return apiResolver.resolve('todo.tasks@get');
                },
                Tags : function (apiResolver)
                {
                    return apiResolver.resolve('todo.tags@get');
                }
            },
            bodyClass: 'todo'
        });

        // Translation
        $translatePartialLoaderProvider.addPart('app/main/apps/todo');

        // Navigation
        msNavigationServiceProvider.saveItem('apps.to-do', {
            title : 'To-Do',
            icon  : 'icon-checkbox-marked',
            state : 'app.to-do',
            badge : {
                content: 3,
                color  : '#4CAF50'
            },
            weight: 6
        });
    }

})();