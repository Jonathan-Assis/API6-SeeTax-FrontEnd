import axios, {type AxiosResponse} from 'axios';
import type { IGruposConsolidado, IInstituicoes, IServicos } from '@/interfaces/services';
const url = 'https://api6-seetax-backend.onrender.com';
let method = axios.create({
    baseURL: url,
    timeout: 30000
});

const url_ListaValoresDeServicoBancario = 'https://olinda.bcb.gov.br/olinda/servico/Informes_ListaValoresDeServicoBancario/versao/v1/odata'
let methodValoresDeServicoBancario = axios.create({
    baseURL: url_ListaValoresDeServicoBancario,
    timeout: 30000
})
const url_ListaTarifaPorValores = 'https://olinda.bcb.gov.br/olinda/servico/Informes_ListaTarifaPorValores/versao/v1/odata'
let methodListaTarifaPorValores = axios.create({
    baseURL: url_ListaTarifaPorValores,
    timeout: 30000
})

const url_ListaTarifasPorInstituicaoFinanceira = 'https://olinda.bcb.gov.br/olinda/servico/Informes_ListaTarifasPorInstituicaoFinanceira/versao/v1/odata'
let methodListaTarifasPorInstituicaoFinanceira = axios.create({
    baseURL: url_ListaTarifasPorInstituicaoFinanceira,
    timeout: 30000
})

export default class ServerConnection {
    static async getRanking() {
        return await method.get('/ranking');
    }

    static async getTax() {
        return await method.get('/tax');
    }
    
    static async getInstituicoes() {
        return await method.get('/instituicoes');
    }

    /**
     * Retorna o grupo consolidado
     * 
     * código e nome
     * @example {Codigo: '01', Nome: 'Bancos privados'}
     * {Codigo: '02', Nome: 'Bancos públicos + Caixa Econômica Federal'}
     */
    static async getGrupos() {
        return await methodValoresDeServicoBancario.get('/GruposConsolidados?$top=100&$format=json');
    }
    
    /**
     * Retorna os serviços bancários
     * 
     * @example {
            "Codigo": "0100",
            "Nome": "Cadastro"
        },
        {
            "Codigo": "0101",
            "Nome": "Confecção de ficha cadastral"
        },
     */

    static async getServicos() {
        return await methodListaTarifaPorValores.get('/ServicosBancarios?$top=200&$format=json');
    }

    /**
     * Retorna os valores minimo, médio e máximo dos serviços
     * @params Pessoa Física ou Jurídica 'F' ou 'J' (Vem das constantes),
     * Código do Grupo Consolidado(Vem do **getGrupos()**) exemplo '02', '03'
     * 
     * @example {
            "NomeServico": "Confecção de cadastro para início de relacionamento - CADASTRO",
            "ValorMinimo": 0,
            "PeriodicidadeValorMinimo": "-",
            "ValorMaximo": 70,
            "PeriodicidadeValorMaximo": "Por Evento",
            "ValorMedio": 37.33
        },
        {
            "NomeServico": "CARTÃO - Fornecimento de 2º via de cartão com função débito",
            "ValorMinimo": 0,
            "PeriodicidadeValorMinimo": "-",
            "ValorMaximo": 30,
            "PeriodicidadeValorMaximo": "Por Evento",
            "ValorMedio": 11.24
        }
     */
    static async getMinMedMaxServicos(tipo: string = 'F', grupoConsolidado: string = '02') {
        return await methodValoresDeServicoBancario.get(`/ListaValoresServicoBancario(PessoaFisicaOuJuridica=@PessoaFisicaOuJuridica,CodigoGrupoConsolidado=@CodigoGrupoConsolidado)?@PessoaFisicaOuJuridica='${tipo}'&@CodigoGrupoConsolidado='${grupoConsolidado}'&$top=100&$format=json`)
    }

    /**
     * Retorna o cnpj
     * 
     * @example {
            "Cnpj": "02115870",
            "Nome": "COOPERATIVA DE ECONOMIA E CRÉDITO MÚTUO DOS FUNCIONÁRIOS PÚBLICOS MUNICIPAIS DE ITAPIRA - CREDITA"
        },
        {
            "Cnpj": "71479653",
            "Nome": "COOPERATIVA DE ECONOMIA E CRÉDITO MÚTUO DOS MÉDICOS E DEMAIS PROFISSIONAIS DA ÁREA DE SAÚDE DE NÍVEL SUPERIOR DE JUIZ DE FORA LTDA. - UNICRED CAMINHO NOVO"
        },
     */
    static async getCNPJ(){
        return await methodListaTarifasPorInstituicaoFinanceira.get(`/ListaInstituicoesDeGrupoConsolidado(CodigoGrupoConsolidado=@CodigoGrupoConsolidado)?@CodigoGrupoConsolidado='11'&$top=2000&$format=json`)
    }

    /**
     * Retorna os valores minimo, médio e máximo dos serviços
     * @params Pessoa Física ou Jurídica 'F' ou 'J' (Vem das constantes),
     * CNPJ(Vem do **getCNPJ()**) exemplo '92702067'
     * 
     * @example {
            "CodigoServico": "1101",
            "Servico": "Confecção de cadastro para início de relacionamento - CADASTRO",
            "Unidade": "Por cliente",
            "DataVigencia": "2022-04-30",
            "ValorMaximo": 33.01,
            "TipoValor": "Real",
            "Periodicidade": "Por evento"
        },
        {
            "CodigoServico": "1201",
            "Servico": "CARTÃO - Fornecimento de 2º via de cartão com função débito",
            "Unidade": "por cliente",
            "DataVigencia": "2008-04-30",
            "ValorMaximo": 8.8,
            "TipoValor": "Real",
            "Periodicidade": "Por evento"
        },
     */
    static async getMaxServicos(tipo: string = 'F', cnpj: string = '92702067') {
        return await methodListaTarifasPorInstituicaoFinanceira.get(`/ListaTarifasPorInstituicaoFinanceira(PessoaFisicaOuJuridica=@PessoaFisicaOuJuridica,CNPJ=@CNPJ)?@PessoaFisicaOuJuridica='${tipo}'&@CNPJ='${cnpj}'&$top=100&$format=json`)
    }
}