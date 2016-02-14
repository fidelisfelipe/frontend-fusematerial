(function ()
{
    'use strict';

    angular
        .module('app.todo')
        .controller('TodoController', TodoController);

    /** @ngInject */
    function TodoController($document, $mdDialog, $mdSidenav, Tasks, Tags)
    {
        var vm = this;

        // Data
        vm.tasks = Tasks.data;
        vm.tags = Tags.data;
        vm.completed = [];
        vm.colors = ['blue', 'blue-grey', 'orange', 'pink', 'purple'];
        vm.projects = {
            'creapond'    : 'Project Creapond',
            'withinpixels': 'Project Withinpixels'
        };
        vm.selectedFilter = {
            filter : 'Start Date',
            dueDate: 'Next 3 days'
        };
        vm.selectedProject = 'creapond';

        // Tasks will be filtered against these models
        vm.taskFilters = {
            search   : '',
            tags     : [],
            completed: '',
            deleted  : false,
            important: '',
            starred  : '',
            startDate: '',
            dueDate  : ''
        };
        vm.taskFiltersDefaults = angular.copy(vm.taskFilters);
        vm.showAllTasks = true;

        vm.taskOrder = '';
        vm.taskOrderDescending = false;

        vm.sortableOptions = {
            handle        : '.handle',
            forceFallback : true,
            ghostClass    : 'todo-item-placeholder',
            fallbackClass : 'todo-item-ghost',
            fallbackOnBody: true,
            sort          : true
        };
        vm.msScrollOptions = {
            suppressScrollX: true
        };

        // Methods
        vm.preventDefault = preventDefault;
        vm.openTaskDialog = openTaskDialog;
        vm.toggleCompleted = toggleCompleted;
        vm.toggleSidenav = toggleSidenav;
        vm.toggleFilter = toggleFilter;
        vm.toggleFilterWithEmpty = toggleFilterWithEmpty;
        vm.filterByStartDate = filterByStartDate;
        vm.filterByDueDate = filterByDueDate;
        vm.resetFilters = resetFilters;
        vm.toggleTagFilter = toggleTagFilter;
        vm.isTagFilterExists = isTagFilterExists;

        init();

        //////////

        /**
         * Initialize the controller
         */
        function init()
        {
            angular.forEach(vm.tasks, function (task)
            {
                if ( task.startDate )
                {
                    task.startDate = new Date(task.startDate);
                    task.startDateTimestamp = task.startDate.getTime();
                }

                if ( task.dueDate )
                {
                    task.dueDate = new Date(task.dueDate);
                    task.dueDateTimestamp = task.dueDate.getTime();
                }
            });
        }

        /**
         * Prevent default
         *
         * @param e
         */
        function preventDefault(e)
        {
            e.preventDefault();
            e.stopPropagation();
        }

        /**
         * Open new task dialog
         *
         * @param ev
         * @param task
         */
        function openTaskDialog(ev, task)
        {
            $mdDialog.show({
                controller         : 'TaskDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/todo/dialogs/task/task-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    Task : task,
                    Tasks: vm.tasks,
                    event: ev
                }
            });
        }

        /**
         * Toggle completed status of the task
         *
         * @param task
         * @param event
         */
        function toggleCompleted(task, event)
        {
            event.stopPropagation();
            task.completed = !task.completed;
        }

        /**
         * Toggle sidenav
         *
         * @param sidenavId
         */
        function toggleSidenav(sidenavId)
        {
            $mdSidenav(sidenavId).toggle();
        }

        /**
         * Toggles filter with true or false
         *
         * @param filter
         */
        function toggleFilter(filter)
        {
            vm.taskFilters[filter] = !vm.taskFilters[filter];

            checkFilters();
        }

        /**
         * Toggles filter with true or empty string
         * @param filter
         */
        function toggleFilterWithEmpty(filter)
        {
            if ( vm.taskFilters[filter] === '' )
            {
                vm.taskFilters[filter] = true;
            }
            else
            {
                vm.taskFilters[filter] = '';
            }

            checkFilters();
        }

        /**
         * Reset filters
         */
        function resetFilters()
        {
            vm.showAllTasks = true;
            vm.taskFilters = angular.copy(vm.taskFiltersDefaults);
        }

        /**
         * Check filters and mark showAllTasks
         * as true if no filters selected
         */
        function checkFilters()
        {
            vm.showAllTasks = !!angular.equals(vm.taskFiltersDefaults, vm.taskFilters);
        }

        /**
         * Filter by startDate
         *
         * @param item
         * @returns {boolean}
         */
        function filterByStartDate(item)
        {
            if ( vm.taskFilters.startDate === true )
            {
                return item.startDate === new Date();
            }

            return true;
        }

        /**
         * Filter Due Date
         *
         * @param item
         * @returns {boolean}
         */
        function filterByDueDate(item)
        {
            if ( vm.taskFilters.dueDate === true )
            {
                return !(item.dueDate === null || item.dueDate.length === 0);
            }

            return true;
        }

        /**
         * Toggles tag filter
         *
         * @param tag
         */
        function toggleTagFilter(tag)
        {
            var i = vm.taskFilters.tags.indexOf(tag);

            if ( i > -1 )
            {
                vm.taskFilters.tags.splice(i, 1);
            }
            else
            {
                vm.taskFilters.tags.push(tag);
            }

            checkFilters();
        }

        /**
         * Returns if tag exists in the tagsFilter
         *
         * @param tag
         * @returns {boolean}
         */
        function isTagFilterExists(tag)
        {
            return vm.taskFilters.tags.indexOf(tag) > -1;
        }
    }
})();