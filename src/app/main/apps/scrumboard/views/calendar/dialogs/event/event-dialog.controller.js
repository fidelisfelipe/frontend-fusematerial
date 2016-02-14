(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('ScrumboardCalendarEventDialogController', ScrumboardCalendarEventDialogController);

    /** @ngInject */
    function ScrumboardCalendarEventDialogController($mdDialog, dueDate, BoardService, msUtils)
    {
        var vm = this;

        // Data
        vm.board = BoardService.data;
        vm.dueDate = dueDate;
        vm.newCard = {
            name  : '',
            listId: ''
        };
        vm.selectedCards = [];

        // Methods
        vm.exists = msUtils.exists;
        vm.toggleInArray = msUtils.toggleInArray;
        vm.closeDialog = closeDialog;
        vm.addNewCard = addNewCard;
        vm.assignDueDate = assignDueDate;

        //////////

        /**
         * Close Dialog
         */
        function closeDialog()
        {
            $mdDialog.hide();
        }

        /**
         * Add New Card
         */
        function addNewCard()
        {
            var newCardId = msUtils.guidGenerator();

            vm.board.cards.push({
                'id'               : newCardId,
                'name'             : vm.newCard.name,
                'description'      : '',
                'idAttachmentCover': '',
                'idMembers'        : [],
                'idLabels'         : [],
                'attachments'      : [],
                'subscribed'       : false,
                'checklists'       : [],
                'checkItems'       : 0,
                'checkItemsChecked': 0,
                'comments'         : [],
                'activities'       : [],
                'due'              : vm.dueDate
            });

            vm.board.lists.getById(vm.newCard.listId).idCards.push(newCardId);

            // Reset the newCard object
            vm.newCard = {
                name: '',
                listId: ''
            };

            closeDialog();
        }

        /**
         * Assign Due Date
         */
        function assignDueDate()
        {
            angular.forEach(vm.selectedCards, function (cardId)
            {
                vm.board.cards.getById(cardId).due = vm.dueDate;
            });

            vm.selectedCards = [];

            closeDialog();
        }
    }
})();