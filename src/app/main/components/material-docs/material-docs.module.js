(function ()
{
    'use strict';

    /**
     * Replace those for demo assets
     * img/                     >>>            assets/angular-material-assets/img/
     * 'icons                   >>>            'assets/angular-material-assets/icons/
     */
    angular
        .module('app.components.material-docs', ['ngMaterial', 'ngMessages'])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider, $stateProvider, ELEMENTS_NAVIGATION)
    {
        msNavigationServiceProvider.saveItem('components.elements', {
            title : 'Angular Material Elements',
            icon  : 'icon-layers',
            weight: 0
        });

        msNavigationServiceProvider.saveItem('components.elements.inputs', {
            title : 'Inputs',
            weight: 0
        });

        msNavigationServiceProvider.saveItem('components.elements.buttons', {
            title : 'Buttons',
            weight: 1
        });

        msNavigationServiceProvider.saveItem('components.elements.content-elements', {
            title : 'Content Elements',
            weight: 2
        });

        msNavigationServiceProvider.saveItem('components.elements.lists', {
            title : 'Lists',
            weight: 3
        });

        msNavigationServiceProvider.saveItem('components.elements.menus', {
            title : 'Menus',
            weight: 4
        });

        msNavigationServiceProvider.saveItem('components.elements.progress', {
            title : 'Progress',
            weight: 5
        });

        msNavigationServiceProvider.saveItem('components.elements.others', {
            title : 'Others',
            weight: 6
        });


        angular.forEach(ELEMENTS_NAVIGATION, function (component)
        {

            $stateProvider.state('app.docs_' + component.stateName, {
                url  : '/components/angular-material-elements/' + component.url,
                views: {
                    'content@app': {
                        templateUrl: 'app/main/components/material-docs/material-doc-template.html',
                        controller : 'DocTemplateController as vm'
                    }
                },
                data : component
            });

            // Navigation
            msNavigationServiceProvider.saveItem(component.navPath + '.' + component.url, {
                title : component.name,
                state : 'app.docs_' + component.stateName,
                weight: component.weight
            });
        });

    }
})();