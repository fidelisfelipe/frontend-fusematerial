(function ()
{
    'use strict';

    angular
        .module('app.components.material-docs')
        .constant('ELEMENTS_NAVIGATION', [
            /* INPUTS */
            {
                name      : 'Autocomplete',
                url       : 'autocomplete',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.autocomplete',
                stateName : 'material_components_autocomplete',
                weight    : 1
            },
            {
                name      : 'Checkbox',
                url       : 'checkbox',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.checkbox',
                stateName : 'material_components_checkbox',
                weight    : 2
            },
            {
                name      : 'Chips',
                url       : 'chips',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.chips',
                stateName : 'material_components_chips',
                weight    : 3
            },
            {
                name      : 'Date Picker',
                url       : 'date-picker',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.datepicker',
                stateName : 'material_components_datepicker',
                weight    : 4
            },
            {
                name      : 'Input',
                url       : 'input',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.input',
                stateName : 'material_components_input',
                weight    : 5
            },
            {
                name      : 'Radio Button',
                url       : 'radio-button',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.radioButton',
                stateName : 'material_components_radioButton',
                weight    : 6
            },
            {
                name      : 'Select',
                url       : 'select',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.select',
                stateName : 'material_components_select',
                weight    : 7
            },
            {
                name      : 'Slider',
                url       : 'slider',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.slider',
                stateName : 'material_components_slider',
                weight    : 8
            },
            {
                name      : 'Switch',
                url       : 'switch',
                navPath   : 'components.elements.inputs',
                moduleName: 'material.components.switch',
                stateName : 'material_components_switch',
                weight    : 9
            },
            /* BUTTONS */
            {
                name      : 'Button',
                url       : 'button',
                navPath   : 'components.elements.buttons',
                moduleName: 'material.components.button',
                stateName : 'material_components_button',
                weight    : 1
            },
            {
                name      : 'Fab Actions',
                url       : 'fab-actions',
                navPath   : 'components.elements.buttons',
                moduleName: 'material.components.fabActions',
                stateName : 'material_components_fabActions',
                weight    : 2
            },
            {
                name      : 'Fab Speed Dial',
                url       : 'fab-speed-dial',
                navPath   : 'components.elements.buttons',
                moduleName: 'material.components.fabSpeedDial',
                stateName : 'material_components_fabSpeedDial',
                weight    : 3
            },
            {
                name      : 'Fab Toolbar',
                url       : 'fab-toolbar',
                navPath   : 'components.elements.buttons',
                moduleName: 'material.components.fabToolbar',
                stateName : 'material_components_fabToolbar',
                weight    : 4
            },
            /* CONTENT ELEMENTS */
            {
                name      : 'Bottom Sheet',
                url       : 'bottom-sheet',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.bottomSheet',
                stateName : 'material_components_bottomSheet',
                weight    : 1
            },
            {
                name      : 'Card',
                url       : 'card',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.card',
                stateName : 'material_components_card',
                weight    : 2
            },
            {
                name      : 'Content',
                url       : 'content',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.content',
                stateName : 'material_components_content',
                weight    : 3
            },
            {
                name      : 'Dialog',
                url       : 'dialog',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.dialog',
                stateName : 'material_components_dialog',
                weight    : 4
            },
            {
                name       : 'Icon',
                url        : 'icon',
                navPath    : 'components.elements.content-elements',
                moduleName : 'material.components.icon',
                stateName  : 'material_components_icon',
                excludeDemo: true,
                weight     : 5
            },
            {
                name      : 'Sidenav',
                url       : 'sidenav',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.sidenav',
                stateName : 'material_components_sidenav',
                weight    : 6
            },
            {
                name      : 'Subheader',
                url       : 'subheader',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.subheader',
                stateName : 'material_components_subheader',
                weight    : 7
            },
            {
                name      : 'Tabs',
                url       : 'tabs',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.tabs',
                stateName : 'material_components_tabs',
                weight    : 8
            },
            {
                name      : 'Toast',
                url       : 'toast',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.toast',
                stateName : 'material_components_toast',
                weight    : 9
            },
            {
                name      : 'Toolbar',
                url       : 'toolbar',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.toolbar',
                stateName : 'material_components_toolbar',
                weight    : 10
            },
            {
                name      : 'Tooltip',
                url       : 'tooltip',
                navPath   : 'components.elements.content-elements',
                moduleName: 'material.components.tooltip',
                stateName : 'material_components_tooltip',
                weight    : 11
            },
            {
                name      : "Whiteframe",
                url       : 'whiteframe',
                navPath   : 'components.elements.content-elements',
                moduleName: "material.components.whiteframe",
                stateName : 'material_components_whiteframe',
                weight    : 12
            },
            /* LISTS */
            {
                name      : 'Grid List',
                url       : 'grid-list',
                navPath   : 'components.elements.lists',
                moduleName: 'material.components.gridList',
                stateName : 'material_components_gridList',
                weight    : 1
            },
            {
                name      : 'List',
                url       : 'list',
                navPath   : 'components.elements.lists',
                moduleName: 'material.components.list',
                stateName : 'material_components_list',
                weight    : 2
            },
            /* MENUS */
            {
                name      : 'Menu',
                url       : 'menu',
                navPath   : 'components.elements.menus',
                moduleName: 'material.components.menu',
                stateName : 'material_components_menu',
                weight    : 1
            },
            {
                name      : 'Menu Bar',
                url       : 'menu-bar',
                navPath   : 'components.elements.menus',
                moduleName: 'material.components.menuBar',
                stateName : 'material_components_menu-bar',
                weight    : 2
            },
            /* PROGRESS */
            {
                name      : 'Progress Circular',
                url       : 'progress-circular',
                navPath   : 'components.elements.progress',
                moduleName: 'material.components.progressCircular',
                stateName : 'material_components_progressCircular',
                weight    : 1
            },
            {
                name      : 'Progress Linear',
                url       : 'progress-linear',
                navPath   : 'components.elements.progress',
                moduleName: 'material.components.progressLinear',
                stateName : 'material_components_progressLinear',
                weight    : 2
            },
            /* OTHERS */
            {
                name      : 'Divider',
                url       : 'divider',
                navPath   : 'components.elements.others',
                moduleName: 'material.components.divider',
                stateName : 'material_components_divider',
                weight    : 1
            },
            {
                name      : 'Ripple',
                url       : 'ripple',
                navPath   : 'components.elements.others',
                moduleName: 'material.core.ripple',
                stateName : 'material_core_ripple',
                weight    : 2
            },
            {
                name      : 'Sticky',
                url       : 'sticky',
                navPath   : 'components.elements.others',
                moduleName: 'material.components.sticky',
                stateName : 'material_components_sticky',
                weight    : 3
            },
            {
                name      : 'Swipe',
                url       : 'swipe',
                navPath   : 'components.elements.others',
                moduleName: 'material.components.swipe',
                stateName : 'material_components_swipe',
                weight    : 4
            },
            {
                name      : 'Util',
                url       : 'util',
                navPath   : 'components.elements.others',
                moduleName: 'material.core.util',
                stateName : 'material_core_util',
                weight    : 5
            },
            {
                name      : 'Virtual Repeat',
                url       : 'virtual-repeat',
                navPath   : 'components.elements.others',
                moduleName: 'material.components.virtualRepeat',
                stateName : 'material_components_virtualRepeat',
                weight    : 6
            }
        ]);
})();