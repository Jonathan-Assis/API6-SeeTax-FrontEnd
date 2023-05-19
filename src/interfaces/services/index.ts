export interface IGruposConsolidado {
  Codigo: string
  Nome: string
}

export interface IInstituicoes {
  id: number
  Cnpj: string
  Nome: string
}

export interface IServicos {
  Codigo: string
  Nome: string
}

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
