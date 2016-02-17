(function ()
{
    'use strict';

    angular
        .module('app.ui.formswizard.test')
        .controller('FormsTestController', FormsTestController);
    
    /** @ngInject */
    function FormsTestController($mdDialog)
    {
        var vm = this;

        // Data
        vm.tracker_page = {
        	currentLabel:'Serviços | Criar Proposta Automóvel'
        };
        vm.basicForm = {};
        
        vm.formWizard = {
        		title:'Proposta', 
        		titleForm:'',
        		tabs: {
        			tab1: 'Proprietario', 
        			tab2: 'Condutor',
        			tab3: 'Condutor/Perfil',
        			tab4: 'Menor 25 anos',
        			tab5: 'Veículo', 
        			tab6: 'Coberturas',
        			tab7: 'Preparado'
        				},
        		firstname: 'John',
        		lastname: 'Malter',
        		email: 'johnm@sec.com',
        		password: '123456',
        		passwordConfirm: '123456',
        		city: 'Brasília',
        		postalCode: '72145000',
        		address: 'Rua 25 esquina com a Rua 35'
        		
        };

        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function (state)
        {
            return {abbrev: state};
        });

        // Methods
        vm.sendForm = sendForm;

        //////////

        /**
         * Send form
         */
        function sendForm(ev)
        {
            // You can do an API call here to send the form to your server

            // Show the sent data.. you can delete this safely.
            $mdDialog.show({
                controller         : function ($scope, $mdDialog, formWizardData)
                {
                    $scope.formWizardData = formWizardData;
                    $scope.closeDialog = function ()
                    {
                        $mdDialog.hide();
                    }
                },
                template           : '<md-dialog>' +
                '  <md-dialog-content><h1>You have sent the form with the following data</h1><div><pre>{{formWizardData | json}}</pre></div></md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
                parent             : angular.element('body'),
                targetEvent        : ev,
                locals             : {
                    formWizardData: vm.formWizard
                },
                clickOutsideToClose: true
            });

            // Clear the form data
            vm.formWizard = {};
        }
    }
})();