import type { TPessoa } from "../constants"

/**
 * Grupos consolidados
 */
export interface IGruposConsolidado {
  Codigo: string
  Nome: string
}

export interface ICNPJ {
  Cnpj: string
  Nome: string
}

/**
 * Serviços
 */
export interface IServicos extends IGruposConsolidado {}

/**
 * Instituições financeiras
 */
export interface IInstituicoes {
  id: number
  Cnpj: string
  Nome: string
}

/**
 * Tarifas por instituição valor máximo
 */
export interface ITarifasInstituicoes {
  id: number
  cnpj: string
  pessoa: TPessoa
  CodigoServico: string
  Servico?: null
  Unidade: string
  DataVigencia: Date | string
  inst_nome: string
  ValorMaximo: number
  TipoValor: string
  Periodicidade:string
}

/**
 * IA valores da tarifas
 */
export interface ITarifasValor {
  id: number
  codigo: string
  pessoa: TPessoa
  data: string
  Cnpj: string
  RazaoSocial: string | null
  ValorMaximo: number
  Periodicidade: string
}

/**
 * Tarifas por serviço minimo, médio e máximo
 */
export interface ITarifasServicos {
  id: number
  grupo: string
  codigo: string
  pessoa: TPessoa
  NomeServico: null
  ValorMaximo: number
  ValorMinimo: number
  ValorMedio: number
  PeriodicidadeValorMaximo: string
  PeriodicidadeValorMinimo: string
}

/**
 * Ranking comparador
 */
export interface IRankingComparador extends ITarifasServicos{}

/**
 * Ranking, body da requisição
 */
export interface IRankingComparadorReq {
  grupos: [string]
  servicos: [string]
}

/**
 * Top 5 do Ranking
 */
export interface IRanking {
  position: number
	instituicao: ITarifasInstituicoes
}

export interface IRankingBody extends ITarifasInstituicoes {
  position: number
}

/**
 * Top 5 do Ranking, Query
 */
export type TRankingQuery = string

export interface IValoresServicos {
  id: number
  grupo: string
  codigo: string
  pessoa: 'F' | 'J'
  NomeServico: null
  ValorMaximo: number
  ValorMinimo: number
  ValorMedio: number
}


export interface ITarifasServicosInstituicaoMax {
  CodigoServico: string
  Servico?: string
  Unidade:string
  Periodicidade: string
  DataVigencia: Date | string
  ValorMaximo: number
  TipoValor: string
}

export interface ITarifasServicosGrupoMax {
  Cnpj: string
  RazaoSocial: string
  ValorMaximo: number
  Periodicidade: string
}

export interface ITarifasServicosMax {
  '@odata.context': string
  value: ITarifasServicosInstituicaoMax
}

export interface ITarifasServicosMinMedMaxValue {
  NomeServico: string
  ValorMinimo: number
  PeriodicidadeValorMinimo: string
  ValorMaximo: number
  PeriodicidadeValorMaximo: string
  ValorMedio: number
}
