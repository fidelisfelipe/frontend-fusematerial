(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('CalendarViewController', CalendarViewController);

    /** @ngInject */
    function CalendarViewController($scope, $document, $mdDialog, $mdSidenav, BoardService, DialogService)
    {
        var vm = this;

        // Data
        vm.board = BoardService.data;
        vm.eventSources = [];

        vm.calendarUiConfig = {
            calendar: {
                editable                 : true,
                eventLimit               : true,
                header                   : '',
                handleWindowResize       : false,
                aspectRatio              : 1,
                dayNames                 : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                dayNamesShort            : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                timezone                 : 'local',
                eventDurationEditable    : false,
                defaultTimedEventDuration: '01:00:00',
                viewRender               : function (view)
                {
                    vm.calendarView = view;
                    vm.calendar = vm.calendarView.calendar;
                    vm.currentMonthShort = vm.calendar.getDate().format('MMM');
                },
                columnFormat             : {
                    month: 'ddd',
                    week : 'ddd D',
                    day  : 'ddd D'
                },
                eventClick               : function eventDetail(calendarEvent, ev)
                {
                    vm.openCardDialog(ev, calendarEvent.idCard);
                },
                eventDrop                : function (event)
                {
                    vm.board.cards.getById(event.idCard).due = moment.utc(event.start).format('x');
                },
                selectable               : true,
                selectHelper             : true,
                dayClick                 : function (date, ev)
                {
                    var offset = moment().utcOffset();
                    var corrDate = '';

                    if ( offset < 0 )
                    {
                        corrDate = moment.utc(date).subtract(offset, 'm').format('x');
                    }
                    else
                    {
                        corrDate = moment.utc(date).add(offset, 'm').format('x');
                    }

                    eventDialog(corrDate, ev);
                }
            }
        };

        // Methods
        vm.next = next;
        vm.prev = prev;
        vm.goToDate = goToDate;
        vm.openCardDialog = DialogService.openCardDialog;
        vm.toggleSidenav = toggleSidenav;

        //////////

        init();

        /**
         * Initialize
         */
        function init()
        {
            vm.cards = getScheduledCards();
            vm.eventSources[0] = vm.cards;
        }

        /**
         * Get scheduled cards and prepare
         * them to show on the calendar
         *
         * @returns {Array}
         */
        function getScheduledCards()
        {
            var cards = [];

            angular.forEach(vm.board.cards, function (card)
            {
                if ( card.due )
                {
                    cards.push({
                        idCard         : card.id,
                        title          : card.name,
                        start          : moment.utc(card.due, 'x'),
                        due            : card.due,
                        backgroundColor: getEventBgColor(card.due)
                    });
                }
            });

            return cards;
        }

        /**
         * Get background color
         *
         * @param cardDue
         * @returns {*}
         */
        function getEventBgColor(cardDue)
        {
            if ( moment() > moment(cardDue, 'x') )
            {
                return '#F44336';
            }

            return '#4CAF50';
        }

        /**
         * Watch board changes
         */
        $scope.$watch('vm.board', function (current, old)
        {
            if ( angular.equals(current, old) )
            {
                return;
            }

            init();

        }, true);

        /**
         * Go to Date
         *
         * @param date
         */
        function goToDate(date)
        {
            vm.calendarView.calendar.gotoDate(date);
            $mdSidenav('scheduled-tasks-sidenav').close();
        }

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
         * Event Dialog
         */
        function eventDialog(date, ev)
        {
            $mdDialog.show({
                templateUrl        : 'app/main/apps/scrumboard/views/calendar/dialogs/event/event-dialog.html',
                controller         : "ScrumboardCalendarEventDialogController",
                controllerAs       : "vm",
                parent             : $document.find('#scrumboard'),
                targetEvent        : ev,
                clickOutsideToClose: true,
                locals             : {
                    dueDate: date
                }
            });
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

    }
})();