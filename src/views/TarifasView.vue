<script lang="ts">
import { defineComponent, ref } from 'vue';
import { PhTicket } from '@phosphor-icons/vue';
import ServerConnection from '../services';
import capitalizeWord from '../utils/capitalizeWords';


import HeaderComponent from '../components/header/HeaderComponent.vue';
import HeaderNav from '../components/header/HeaderNav.vue';
import TableCommonComponent from '../components/table/TableCommonComponent.vue';
import TableGroupingComponent from '../components/table/TableGroupingComponent.vue';

export default defineComponent({
    name: "TarifasView",
    components: {
        HeaderComponent,
        HeaderNav,
        TableCommonComponent,
        TableGroupingComponent,
        PhTicket
    },
    setup() {
        const data = ref([
            {
                "companie": "Itau Unibanco S.A.",
                "cnpf": "60701190000104",
                "accountType": "CONTA_POUPANCA",
                "priorityServices": [
                    {
                        "name": "EXCLUSAO_CADASTRO_EMITENTES_CHEQUES_SEM_FUNDO_CCF",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "ORDEM_PAGAMENTO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "UTILIZACAO_CANAIS_ATENDIMENTO_RETIRADA_ESPECIE_EXTERIOR",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "TRANSFERENCIA_ENTRE_CONTAS_PROPRIA_INSTITUICAO_PESSOAL_OU_PRESENCIAL",
                        "max": 1.75,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_2_VIA_CARTAO_FUNCAO_DEBITO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "CONFECCAO_CADASTRO_INICIO_RELACIONAMENTO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "DEPOSITO_IDENTIFICADO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "TRANSFERENCIA_DOC_TED_PESSOAL_OU_PRESENCIAL",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_EXTRATO_MENSAL_CONTA_DEPOSITOS_A_VISTA_E_POUPANCA_TERMINAL_AUTOATENDIMENTO",
                        "max": 0.98,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_EXTRATO_MENSAL_CONTA_DEPOSITOS_A_VISTA_E_POUPANCA_PRESENCIAL_OU_PESSOAL",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_EXTRATO_DE_UM_PERIODO_CONTA_DEPOSITOS_A_VISTA_E_POUPANCA_TERMINAL_AUTOATENDIMENTO",
                        "max": 2.95,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_EXTRATO_DE_UM_PERIODO_CONTA_DEPOSITOS_A_VISTA_E_POUPANCA_PRESENCIAL_OU_PESSOAL",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_COPIA_MICROFILME_MICROFICHA_ASSEMELHADO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "SAQUE_CONTA_DEPOSITO_A_VISTA_POUPANCA_PRESENCIAL_OU_PESSOAL",
                        "max": 3.3,
                        "min": 0.0
                    },
                    {
                        "name": "SAQUE_CONTA_DEPOSITO_A_VISTA_POUPANCA_TERMINAL_AUTOATENDIMENTO",
                        "max": 3.0,
                        "min": 0.0
                    },
                    {
                        "name": "TRANSFERENCIA_ENTRE_CONTAS_PROPRIA_INSTITUICAO_TERMINAL_AUTOATENDIMENTO_OUTROS_MEIOS_ELETRONICOS_INCLUSIVE_INTERNET",
                        "max": 1.45,
                        "min": 0.0
                    },
                    {
                        "name": "SMS",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "TRANSFERENCIA_TED_PESSOAL_OU_PRESENCIAL",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "TRANSFERENCIA_DOC_PESSOAL_OU_PRESENCIAL",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "ORDEM_PAGAMENTO",
                        "max": 0.0,
                        "min": 0.0
                    }
                ],
                "otherServices": [
                    {
                        "name": "SAQUE - FRQ TOTAL PACOTE",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "DEPOSITO_ESP_CHEQUE",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_2_VIA_EXTRATO_MENSAL_CONTA_DEPOSITOS_A_VISTA_E_POUPANCA_PRESENCIAL_OU_PESSOAL",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_PAGAMENTO_CONTAS_EXP",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_PAGAMENTO_CONTAS",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_COLETA_DEPOSITO_EXP",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_COLETA_DEPOSITO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_DEPOSITO_26",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_DEPOSITO_2D",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_DEPOSITO_2S",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_SAQUE_EXP",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "BANKEXPRESS_SAQUE",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "2_VIA_FOTOCOPIA",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "2_VIA_FGTS",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "ALTERACAO DATA BOA",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "DEPOSITO_INTERNET",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "CONVENIO_CHEQ_DEP_ESP_DEP_CH",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "CONVENIO_CHEQ_DEP_ESP_CUST_CH",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_2_VIA_EXTRATO_AUTOATENDIMENTO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "2_VIA_FOTOCOPIA_PL_ECON",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "ADIANTAMENTO A DEPOSITANTES",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "PRE_ENVIO_CCF",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "CARTA_COMPROVANTE",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_2_VIA_COMPROVANTE",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "2_VIA_DEMONSTRATIVO_PAGAMENTO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "ENVIO_EXTRATO_CONSOLIDADO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "RENOVACAO_CADASTRO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "ADITAMENTO_DE_CONTRATO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "EMISSAO_CARTAO_TEMATICO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "NEG EXPRESSA - EXCL LIQUIDACAO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "NEG EXPRESSA - ENTRADA",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "NEG EXPRESSA - CANCELAMENTO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "COBRANCA ATIVA - CONSOLIDADO",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "MINHAS_FINANCAS",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_EXTRATO_MENSAL_CONTA_DEPOSITOS_A_VISTA_E_POUPANCA_CORRESPONDENTES_PAIS",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "FORNECIMENTO_EXTRATO_DE_UM_PERIODO_CONTA_DEPOSITOS_A_VISTA_E_POUPANCA_CORRESPONDENTES_PAIS",
                        "max": 0.0,
                        "min": 0.0
                    },
                    {
                        "name": "SAQUE_CONTA_DEPOSITO_A_VISTA_POUPANCA_CORRESPONDENTES_PAIS",
                        "max": 0.0,
                        "min": 0.0
                    }
                ]
            },
            {
		"companie": "Banco Itaucard S.A.",
		"cnpf": "17192451000170",
		"accountType": "CONTA_PAGAMENTO_PRE_PAGA",
		"priorityServices": [],
		"otherServices": [
			{
				"name": "Recebimento de recursos via Pix",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Pagamento QR code em terminais POS Rede, Cielo e Getnet",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Divisão de conta",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "Transferência de recursos da mesma instituição com saldo da conta pagamento",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Recarga de celular",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Pagamento com cartão da conta iti",
				"max": 172.79,
				"min": 0.0
			},
			{
				"name": "iti - Pagamento para contas iti com cartão de crédito outros emissores",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Pagamento com cartão de crédito iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Recebimento de recursos de outras contas iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Transferência de recursos para contas iti com cartão de crédito outros emissores",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "Recebimento de recursos de outras contas pagamento",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Pagamento para contas iti com saldo da conta iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Emissão de boleto",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Transferência de recursos para contas iti com saldo da conta iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Cobrança",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Pagamento para contas iti com cartão de crédito iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Pagamento Pix",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "Transferência de recursos para contas de outras instituições com saldo da conta pagamento",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Transferência de recursos para contas não-iti com saldo da conta iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "Recebimento de recursos de contas de outras instituições",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Recebimento de recursos via Pix",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Recebimento de recursos de contas não-iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Transferência de recursos para contas iti com cartão de crédito iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "Transferência de recursos via Pix",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Transferência de recursos via Pix",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Cartão da conta iti",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "Pagamento de contas com saldo da conta",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "iti - Saque digital",
				"max": 6.9,
				"min": 0.0
			},
			{
				"name": "iti - Pagamento de contas com saldo da conta",
				"max": 0.0,
				"min": 0.0
			},
			{
				"name": "Pagamento Pix",
				"max": 0.0,
				"min": 0.0
			}
		]
	    }
        ])
        let tarifasBody = ref([])
        const dataFilter = data.value.forEach((value, index) => {

            value.accountType = capitalizeWord(value.accountType)

            value.priorityServices.forEach((item: any,index:any)=>{
                item.name = capitalizeWord(item.name)
                value.priorityServices[index] = {
                    companie: value.companie,
                    accountType: value.accountType,
                    ...item
                }
            })
            
            value.otherServices.forEach((item: any, index:any) =>{
                item.name = capitalizeWord(item.name)
                value.otherServices[index] = {
                    companie: value.companie,
                    accountType: value.accountType,
                    ...item
                }
            })
            let datas = [...value.priorityServices, ...value.otherServices]
            datas.forEach((e) => {
                return tarifasBody.value.push(e)
            })
        })
            
        const tarifasHeader = ref([
        { title: 'Banco', data: 'companie'},
        { title: 'Tipo', data: 'accountType' },
        { title: 'Serviço', data: 'name' },
        { title: 'Máximo', data: 'max' },
        { title: 'Mínimo', data: 'min' },
        ])
        return {
            tarifasHeader,
            tarifasBody,
        }
    }
})

</script>

<template>
    <HeaderComponent>
        <HeaderNav to="/" routerName="Dashboard" />
        <HeaderNav to="/filtrar/tarifas" routerName="Tarifas" :actualRoute="true" />
    </HeaderComponent>

    <TableGroupingComponent
        title="Tarifas dos serviços"
        description="Serviços oferecidos pelos bancos, valor mínimo e máximo cobrado de tarifa de utilização"
        :headerData="tarifasHeader"
        :bodyData="tarifasBody"
    >
    </TableGroupingComponent>

</template>
