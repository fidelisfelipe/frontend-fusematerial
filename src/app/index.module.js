(function ()
{
    'use strict';

    /**
     * Main module of the Fuse
     */
    angular
        .module('fuse', [

            // Core
            'app.core',

            // Navigation
            'app.navigation',

            // Toolbar
            'app.toolbar',

            // Quick panel
            'app.quick-panel',

            // Apps
            'app.dashboards',
            'app.calendar',
            'app.mail',
            'app.file-manager',
            'app.scrumboard',
            'app.todo',

            // Pages
            'app.pages',

            // User Interface
            'app.ui',

            // Components
            'app.components'
        ]);
})();