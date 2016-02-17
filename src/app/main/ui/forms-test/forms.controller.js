function Seguro(tipoSeguro){
	this.tipoSeguro = tipoSeguro;
}
function Pessoa(nome){
	this.nome = nome;
}
function Proposta(seguro, pessoa){
	this.seguro = seguro;
	this.proprietario = pessoa;
}

(function ()
{
    'use strict';

    angular
        .module('app.ui.forms-wizard.forms.test')
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
        		title:'FormTest',//Proposta 
        		titleForm:'',
        		tabs: {
        			tab1: 'Seguro', 
        			tab2: 'Proprietario', 
        			tab3: 'Condutor',
        			tab4: 'Condutor/Perfil',
        			tab5: 'Menor 25 anos',
        			tab6: 'Veículo', 
        			tab7: 'Coberturas',
        			tab8: 'Preparado'
        		},
        		proposta: {
        			seguro: {tipoSeguro: 'Novo', ci: '1234', seguradora: 'Bradesco'},		
        			proprietario: {nome: 'Jonh'}},
        		//seguro - tab1
        		dtVigenciaInicio: '10/01/2016',
        		dtVigenciaFim: '10/01/2016',
        		apolice: '123456',
        		classeBonus: 'Classe A',
        		isSinistro: 'Não',
        		//proprietario - tab2
        		
        		firstname: 'John',
        		lastname: 'Malter',
        		email: 'johnm@sec.com',
        		password: '123456',
        		passwordConfirm: '123456',
        		//condutor - tab2
        		city: 'Brasília',
        		postalCode: '72145800',
        		address: 'Rua 25 esquina com a Rua 35',
        		//condutor-perfil - tab3
        		cardholder: '1234',
        		cardnumber: '123',
        		cc2: '123',
        		expirationDate: '10',
        		//Menor 25 - tab4
        		
        		//Veículo - tab5
        		
        		//Cobertura - tab6
        		
        };
        vm.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
        'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
        'WY').split(' ').map(function (state)
        {
            return {abbrev: state};
        });
        //mock states
        vm.formWizard.state = vm.states[0].abbrev;

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