(function ()
{
    'use strict';

    angular
        .module('app.calendar')
        .controller('CalendarController', CalendarController);

    /** @ngInject */
    function CalendarController($mdDialog, $document)
    {
        var vm = this;

        // Data
        var date = new Date();
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();

        vm.events = [
            [
                {
                    id   : 1,
                    title: 'All Day Event',
                    start: new Date(y, m, 1),
                    end  : null
                },
                {
                    id   : 2,
                    title: 'Long Event',
                    start: new Date(y, m, d - 5),
                    end  : new Date(y, m, d - 2)
                },
                {
                    id   : 3,
                    title: 'Some Event',
                    start: new Date(y, m, d - 3, 16, 0),
                    end  : null
                },
                {
                    id   : 4,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 4, 16, 0),
                    end  : null
                },
                {
                    id   : 5,
                    title: 'Birthday Party',
                    start: new Date(y, m, d + 1, 19, 0),
                    end  : new Date(y, m, d + 1, 22, 30)
                },
                {
                    id   : 6,
                    title: 'All Day Event',
                    start: new Date(y, m, d + 8, 16, 0),
                    end  : null
                },
                {
                    id   : 7,
                    title: 'Long Event',
                    start: new Date(y, m, d + 12, 16, 0),
                    end  : null
                },
                {
                    id   : 8,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 2, 0),
                    end  : null
                },
                {
                    id   : 9,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 4, 0),
                    end  : null
                },
                {
                    id   : 10,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 2, 0),
                    end  : null
                },
                {
                    id   : 11,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 4, 0),
                    end  : null
                },
                {
                    id   : 12,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 2, 0),
                    end  : null
                },
                {
                    id   : 13,
                    title: 'Repeating Event',
                    start: new Date(y, m, d + 14, 4, 0),
                    end  : null
                },
                {
                    id   : 14,
                    title: 'Conference',
                    start: new Date(y, m, d + 17, 4, 0),
                    end  : null
                },
                {
                    id   : 15,
                    title: 'Meeting',
                    start: new Date(y, m, d + 22, 4, 0),
                    end  : new Date(y, m, d + 24, 4, 0)
                }
            ]
        ];

        vm.calendarUiConfig = {
            calendar: {
                editable          : true,
                eventLimit        : true,
                header            : '',
                handleWindowResize: false,
                aspectRatio       : 1,
                dayNames          : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                dayNamesShort     : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                viewRender        : function (view)
                {
                    vm.calendarView = view;
                    vm.calendar = vm.calendarView.calendar;
                    vm.currentMonthShort = vm.calendar.getDate().format('MMM');
                },
                columnFormat      : {
                    month: 'ddd',
                    week : 'ddd D',
                    day  : 'ddd M'
                },
                eventClick        : eventDetail,
                selectable        : true,
                selectHelper      : true,
                select            : select
            }
        };

        // Methods
        vm.addEvent = addEvent;
        vm.next = next;
        vm.prev = prev;

        //////////

        /**
         * Go to next on current view (week, month etc.)
         */
        function next()
        {
            vm.calendarView.calendar.next();
        }

        /**
         * Go to previous on current view (week, month etc.)
         */
        function prev()
        {
            vm.calendarView.calendar.prev();
        }

        /**
         * Show event detail
         *
         * @param calendarEvent
         * @param e
         */
        function eventDetail(calendarEvent, e)
        {
            showEventDetailDialog(calendarEvent, e);
        }

        /**
         * Add new event in between selected dates
         *
         * @param start
         * @param end
         * @param e
         */
        function select(start, end, e)
        {
            showEventFormDialog('add', false, start, end, e);
        }

        /**
         * Add event
         *
         * @param e
         */
        function addEvent(e)
        {
            var start = new Date(),
                end = new Date();

            showEventFormDialog('add', false, start, end, e);
        }

        /**
         * Show event detail dialog
         * @param calendarEvent
         * @param e
         */
        function showEventDetailDialog(calendarEvent, e)
        {
            $mdDialog.show({
                controller         : 'EventDetailDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/calendar/dialogs/event-detail/event-detail-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : e,
                clickOutsideToClose: true,
                locals             : {
                    calendarEvent      : calendarEvent,
                    showEventFormDialog: showEventFormDialog,
                    event              : e
                }
            });
        }

        /**
         * Show event add/edit form dialog
         *
         * @param type
         * @param calendarEvent
         * @param start
         * @param end
         * @param e
         */
        function showEventFormDialog(type, calendarEvent, start, end, e)
        {
            var dialogData = {
                type         : type,
                calendarEvent: calendarEvent,
                start        : start,
                end          : end
            };

            $mdDialog.show({
                controller         : 'EventFormDialogController',
                controllerAs       : 'vm',
                templateUrl        : 'app/main/apps/calendar/dialogs/event-form/event-form-dialog.html',
                parent             : angular.element($document.body),
                targetEvent        : e,
                clickOutsideToClose: true,
                locals             : {
                    dialogData: dialogData
                }
            }).then(function (response)
            {
                if ( response.type === 'add' )
                {
                    // Add new
                    vm.events[0].push({
                        id   : vm.events[0].length + 20,
                        title: response.calendarEvent.title,
                        start: response.calendarEvent.start,
                        end  : response.calendarEvent.end
                    });
                }
                else
                {
                    for ( var i = 0; i < vm.events[0].length; i++ )
                    {
                        // Update
                        if ( vm.events[0][i].id === response.calendarEvent.id )
                        {
                            vm.events[0][i] = {
                                title: response.calendarEvent.title,
                                start: response.calendarEvent.start,
                                end  : response.calendarEvent.end
                            };

                            break;
                        }
                    }
                }
            });
        }

    }

})();