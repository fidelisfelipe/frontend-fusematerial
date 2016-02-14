(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .factory('DialogService', DialogService);

    /** @ngInject */
    function DialogService($mdDialog, $document)
    {
        var service = {
            openCardDialog: openCardDialog
        };

        //////////

        /**
         * Open card dialog
         *
         * @param ev
         * @param cardId
         */
        function openCardDialog(ev, cardId)
        {
            $mdDialog.show({
                templateUrl        : 'app/main/apps/scrumboard/dialogs/card/card-dialog.html',
                controller         : "ScrumboardCardDialogController",
                controllerAs       : "vm",
                parent             : $document.find('#scrumboard'),
                targetEvent        : ev,
                clickOutsideToClose: true,
                escapeToClose      : true,
                locals             : {
                    cardId: cardId
                }
            });
        }

        return service;
    }
})();