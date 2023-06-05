export interface IPessoa {
    key: TPessoa
    type: 'Pessoa Física' | 'Pessoa Jurídica'
  }
  
  export type TPessoa = 'F' | 'J'
  
  export interface ITableHeader {
    title: string
    key: string
    align?: string
  }
  
  export interface IRankingHeader extends ITableHeader {}
  export interface IRankingBody {
    position: number
    inst_nome: string
    Unidade: string
    DataVigencia: Date | string
    Periodicidade: string
    ValorMaximo: number
  }
  
  export interface ITarifasServicosMaxHeader extends ITableHeader {}
  
  export interface ITarifasServicosMaxBody {
    CodigoServico: string
    Servico: string
    Unidade:string
    Periodicidade: string
    DataVigencia: Date | string
    ValorMaximo: number
  }