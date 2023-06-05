export interface ITable {
    data: []
  }
  
  export interface ITableRankingBody {
    id: number
    name: string
    type: string
    average: number
  }
  export interface ITableRankingHeader {
    header: ['Posição', 'Tipo', 'Data de Atualização', 'Média de Tarifas']
  }