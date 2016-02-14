(function ()
{
    'use strict';

    angular
        .module('app.ui', [
            'app.ui.forms',
            'app.ui.icons',
            'app.ui.material-colors',
            'app.ui.page-layouts.blank',
            'app.ui.page-layouts.carded.fullwidth',
            'app.ui.page-layouts.carded.fullwidth-ii',
            'app.ui.page-layouts.carded.left-sidenav',
            'app.ui.page-layouts.carded.left-sidenav-ii',
            'app.ui.page-layouts.carded.right-sidenav',
            'app.ui.page-layouts.carded.right-sidenav-ii',
            'app.ui.page-layouts.simple.fullwidth',
            'app.ui.page-layouts.simple.left-sidenav',
            'app.ui.page-layouts.simple.left-sidenav-ii',
            'app.ui.page-layouts.simple.right-sidenav',
            'app.ui.page-layouts.simple.right-sidenav-ii',
            'app.ui.page-layouts.simple.tabbed',
            'app.ui.theme-colors',
            'app.ui.typography'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
        // Navigation
        msNavigationServiceProvider.saveItem('ui', {
            title : 'USER INTERFACE',
            group : true,
            weight: 3
        });

        msNavigationServiceProvider.saveItem('ui.forms', {
            title: 'Forms',
            icon : 'icon-window-restore',
            state: 'app.ui_forms'
        });

        msNavigationServiceProvider.saveItem('ui.icons', {
            title: 'Icons',
            icon : 'icon-file-image-box',
            state: 'app.ui_icons'
        });

        msNavigationServiceProvider.saveItem('ui.typography', {
            title: 'Typography',
            icon : 'icon-format-size',
            state: 'app.ui_typography'
        });

        msNavigationServiceProvider.saveItem('ui.theme-colors', {
            title: 'Theme Colors',
            icon : 'icon-palette-advanced',
            state: 'app.ui_theme-colors'
        });

        msNavigationServiceProvider.saveItem('ui.material-colors', {
            title: 'Material Colors',
            icon : 'icon-palette',
            state: 'app.ui_material-colors'
        });


        msNavigationServiceProvider.saveItem('ui.page-layouts', {
            title: 'Page Layouts',
            icon : 'icon-view-quilt'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.carded', {
            title: 'Carded'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.carded.fullwidth', {
            title: 'Full Width (I)',
            state: 'app.ui_page-layouts_carded_fullwidth'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.carded.fullwidth-ii', {
            title: 'Full Width (II)',
            state: 'app.ui_page-layouts_carded_fullwidth-ii'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.carded.left-sidenav', {
            title: 'Left Sidenav (I)',
            state: 'app.ui_page-layouts_carded_left-sidenav'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.carded.left-sidenav-ii', {
            title: 'Left Sidenav (II)',
            state: 'app.ui_page-layouts_carded_left-sidenav-ii'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.carded.right-sidenav', {
            title: 'Right Sidenav (I)',
            state: 'app.ui_page-layouts_carded_right-sidenav'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.carded.right-sidenav-ii', {
            title: 'Right Sidenav (II)',
            state: 'app.ui_page-layouts_carded_right-sidenav-ii'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.simple', {
            title: 'Simple'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.simple.fullwidth', {
            title: 'Full Width (I)',
            state: 'app.ui_page-layouts_simple_fullwidth'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.simple.left-sidenav', {
            title: 'Left Sidenav (I)',
            state: 'app.ui_page-layouts_simple_left-sidenav'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.simple.left-sidenav-ii', {
            title: 'Left Sidenav (II)',
            state: 'app.ui_page-layouts_simple_left-sidenav-ii'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.simple.right-sidenav', {
            title: 'Right Sidenav (I)',
            state: 'app.ui_page-layouts_simple_right-sidenav'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.simple.right-sidenav-ii', {
            title: 'Right Sidenav (II)',
            state: 'app.ui_page-layouts_simple_right-sidenav-ii'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.simple.tabbed', {
            title: 'Tabbed',
            state: 'app.ui_page-layouts_simple_tabbed'
        });

        msNavigationServiceProvider.saveItem('ui.page-layouts.blank', {
            title: 'Blank',
            state: 'app.ui_page-layouts_blank'
        });
    }
})();