import axios, { type AxiosResponse } from 'axios'
import type { TRankingQuery } from '@/interfaces/services'
import type { TPessoa } from '@/interfaces/constants'
const url = 'https://api6-seetax-backend.onrender.com'
let method = axios.create({
  baseURL: url,
  timeout: 30000
})

const url_Olinda = 'https://olinda.bcb.gov.br/olinda/servico'
let methodOlinda = axios.create({
  baseURL: url_Olinda,
  timeout: 30000
})

export default class ServerConnection {
  static async getRanking(servico: TRankingQuery = '1601') {
    return await method.get('/tarifas/ranking', {
      params: {
        servico
      }
    })
  }

  static async getTax() {
    return await method.get('/tax')
  }

  static async getInstituicoes() {
    return await method.get('/instituicoes')
  }

  /**
   * Retorna o grupo consolidado
   *
   * código e nome
   * @example {Codigo: '01', Nome: 'Bancos privados'}
   * {Codigo: '02', Nome: 'Bancos públicos + Caixa Econômica Federal'}
   */
  static async getGrupos() {
    return await method.get('/grupos')
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
    return await method.get('/servicos')
  }

  /**
     * Retorna os valores minimo, médio e máximo dos serviços
     * @params Pessoa Física ou Jurídica 'F' ou 'J' (Vem das constantes),
     * Código do Grupo Consolidado(Vem do *getGrupos()*) exemplo '02', '03'
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
  static async getMinMedMaxServicos(tipo: TPessoa, grupoConsolidado: string) {
    return await methodOlinda.get(
      `/Informes_ListaValoresDeServicoBancario/versao/v1/odata/ListaValoresServicoBancario(PessoaFisicaOuJuridica=@PessoaFisicaOuJuridica,CodigoGrupoConsolidado=@CodigoGrupoConsolidado)?@PessoaFisicaOuJuridica='${tipo}'&@CodigoGrupoConsolidado='${grupoConsolidado}'&$top=100&$format=json`
    )
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
  static async getCNPJ(grupo: string) {
    return await methodOlinda.get(
      `/Informes_ListaTarifasPorInstituicaoFinanceira/versao/v1/odata/ListaInstituicoesDeGrupoConsolidado(CodigoGrupoConsolidado=@CodigoGrupoConsolidado)?@CodigoGrupoConsolidado='${grupo}'&$top=2000&$format=json`
    )
  }

  /**
     * Retorna os valores max por instituição
     * @params Pessoa Física ou Jurídica 'F' ou 'J' (Vem das constantes),
     * CNPJ(Vem do *getCNPJ()*) exemplo '92702067'
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
  static async getMaxServicosPorInstituicao(tipo: TPessoa, cnpj: string) {
    return await methodOlinda.get(
      `/Informes_ListaTarifasPorInstituicaoFinanceira/versao/v1/odata/ListaTarifasPorInstituicaoFinanceira(PessoaFisicaOuJuridica=@PessoaFisicaOuJuridica,CNPJ=@CNPJ)?@PessoaFisicaOuJuridica='${tipo}'&@CNPJ='${cnpj}'&$top=100&$format=json`
    )
  }

  /**
     * Retorna os valores máximos de serviço por grupo e serviço
     * @params Grupo consolidado (vem do *getGrupos()*) exemplo '02,
     * e os serviços (Vem do *getServicos()*) exemplo '1101'
     * 
     * @example   {
            "Cnpj": 0,
            "RazaoSocial": "BANCO DO BRASIL S.A.",
            "ValorMaximo": 30,
            "Periodicidade": "Por evento"
        },
        {
            "Cnpj": 208,
            "RazaoSocial": "BRB - BANCO DE BRASILIA S.A.",
            "ValorMaximo": 29,
            "Periodicidade": "Por evento"
        },
     */
  static async getMaxServicosPorGrupoServico(grupo: string, servico: string) {
    return await methodOlinda.get(
      `/Informes_ListaTarifaPorValores/versao/v1/odata/ListaTarifasPorValores(CodigoGrupoConsolidado=@CodigoGrupoConsolidado,CodigoServico=@CodigoServico)?@CodigoGrupoConsolidado='${grupo}'&@CodigoServico='${servico}'&$top=100&$format=json`
    )
  }

  static async getTarifasServicos() {
    return await method.get('/tarifas/servicos')
  }
}