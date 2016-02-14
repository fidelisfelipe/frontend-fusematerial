(function ()
{
    'use strict';

    angular
        .module('app.scrumboard')
        .controller('LabelsMenuController', LabelsMenuController);

    /** @ngInject */
    function LabelsMenuController($document, $mdColorPalette, $mdDialog, fuseGenerator, msUtils, BoardService)
    {
        var vm = this;

        // Data
        vm.board = BoardService.data;
        vm.palettes = $mdColorPalette;
        vm.rgba = fuseGenerator.rgba;
        vm.hue = 500;
        vm.newLabelColor = 'red';
        vm.newLabelName = '';

        // Methods
        vm.addNewLabel = addNewLabel;
        vm.removeLabel = removeLabel;

        ////////

        /**
         * Add New Label
         */
        function addNewLabel()
        {
            vm.board.labels.push({
                "id"   : msUtils.guidGenerator(),
                "name" : vm.newLabelName,
                "color": vm.newLabelColor
            });
            vm.newLabelName = '';
        }

        /**
         * Remove label
         *
         * @param ev
         * @param labelId
         */
        function removeLabel(ev, labelId)
        {
            var confirm = $mdDialog.confirm({
                title              : 'Remove Label',
                parent             : $document.find('#scrumboard'),
                textContent        : 'Are you sure want to remove label?',
                ariaLabel          : 'remove label',
                targetEvent        : ev,
                clickOutsideToClose: true,
                escapeToClose      : true,
                ok                 : 'Remove',
                cancel             : 'Cancel'
            });

            $mdDialog.show(confirm).then(function ()
            {
                var arr = vm.board.labels;
                arr.splice(arr.indexOf(arr.getById(labelId)), 1);

                angular.forEach(vm.board.cards, function (card)
                {
                    if ( card.idLabels && card.idLabels.indexOf(labelId) > -1 )
                    {
                        card.idLabels.splice(card.idLabels.indexOf(labelId), 1);
                    }
                });
            }, function ()
            {
                // Canceled
            });
        }

    }
})();