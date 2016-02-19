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
        		//listas prévias
        		tipoSeguroList: ('Novo Renovação').split(' ').map(function (tipo){
                    return {nome: tipo};
                }),
                seguradoraList: ('Bradesco  Itaú  Azul  Porto Seguros').split('  ').map(function (tipo){
                    return {nome: tipo};
                }),
                booleanList: ('Sim Não').split(' ').map(function (tipo){
                    return {nome: tipo};
                }),
                classeBonusList: ('Classe A  Classe B  Classe C  Classe D  Sem Classe de Bônus').split('  ').map(function (tipo){
                    return {nome: tipo};
                }),
                estadoCivilList: ('Solteiro Casado').split(' ').map(function (tipo){
                    return {nome: tipo};
                }),
                estadoList: ('AC AL AP AM BA CE	DF ES GO MA MT MS MG PR PB PA PE PI RJ RN RS RO RR SC SE SP TO').split(' ').map(function (tipo){
                    return {nome: tipo};
                }),
        		
        		tabs: {
        			tab1: 'Seguro', 
        			tab2: 'Proprietario', 
        			tab3: 'Condutor',
        			tab4: 'Condutor/Perfil',
        			tab5: 'Veículo', 
        			tab6: 'Coberturas',
        			tab7: 'Preparado'
        		},
        		proposta: {
        			seguro: {
        				tipoSeguro: 'Novo', 
        				ci: '1234', 
        				seguradora: 'Itaú',
        				dataVigenciaInicio: new Date('10/01/2015'),
                		dataVigenciaFim: new Date('10/01/2016'),
                		apolice: '123456',
                		classeBonus: 'Classe A',
            			isSinistro: 'Não',
        			},		
					proprietario: {
						nome: 'Jonh',
						rg: '123456',
						orgaoEmissor: 'SSP-DF',
						dataEmissao: new Date('10/01/2016'),
						dataNascimento: new Date('10/01/2016'),
						profissao: 'Professor',
						estadoCivil: 'Casado',
						endereco: {
							complemento: 'Qnd 38 Conjuntio K Taguatinga Norte',
							temGaragem: 'Sim',
							cep: '72000-000',
							bairro: 'Taguatinga Norte',
							cidade: 'Brasília',
							uf: 'DF'
						},
						telefone: '(61) 8855-4455',
						email: 'jonh@ibm.com',
						habilitacao: {
							numero: '12345',
							dataValidade: new Date('12/01/2017'),
							dataExpedicao: new Date('01/01/1990')
						},
						banco: {nome: 'Bradesco'},
						agencia: '123456-4',
						contaCorrente: '00045678-3'
					},
					titular: {
						isProprietario: 'Sim',
						nome: 'Jonh',
						rg: '123456',
						orgaoEmissor: 'SSP-DF',
						dataEmissao: new Date('10/01/2016'),
						dataNascimento: new Date('10/01/2016'),
						profissao: 'Professor',
						estadoCivil: 'Casado',
						endereco: {
							complemento: 'Qnd 38 Conjuntio K Taguatinga Norte',
							temGaragem: 'Sim',
							cep: '72000000',
							bairro: 'Taguatinga Norte',
							cidade: 'Brasília',
							uf: {nome: 'DF'}
								
						},
						telefone: '(61) 8855-4455',
						email: 'jonh@ibm.com',
						habilitacao: {
							numero: '12345',
							dataValidade: new Date('12/01/2017'),
							dataExpedicao: new Date('01/01/1990')
						},
						perfil: {
							temMenorVinteCinco: 'Sim',
							enderecoTrabalho: {
								complemento: 'Qnd 38 Conjunto K Taguatinga Norte',
								temGaragem: 'Sim',
								cep: '72000000',
								bairro: 'Taguatinga Norte',
								cidade: 'Brasília',
								uf: {nome: 'DF'}
							},
						},
						
					},
					veiculo: {
						fabricante: 'Ford',
						codigoFipe: '1234',
						modelo: 'Fusion',
						anoFabricacao: '2009',
						combustivel: 'Flex',
						cor: 'Preto',
						cambio: 'Manual',
						placa: 'JJJ0001',
						chassi: '12345678954213',
						renavan: '12345679',
						situacao: 'Financiado',
						bancoFinanciamento: 'Bradesco'
					},
					cobertura: {
						danosMateriais: '2000',
						danosPessoais: '2000',
						danosAcidentePassageiro: '3000',
						assistencia: {
							isAssistenciaVinteQuatroHrs: 'Sim',
							distanciaKm: '3000'},
						carroReserva: {
							isCarroReserva: 'Sim',
							prazoDias: '30'
							},
						protecaoVidros: {
							isProtecao: 'Sim',
							vidros : (
									'Parabrisas', 
									'Retrovisores', 
									'Farois')
								.split(' ').map(
										function (vidro)
										{
							            return {nome: vidro};
										}),
						},
						kmPorMes: '2000'
					}
					
					
        		},
        		
        		//Veículo - tab5
        		
        		//Cobertura - tab6
        		
        };

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