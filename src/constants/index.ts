import type { IRankingHeader, ITarifasServicosMaxHeader } from '@/interfaces/constants'
import type { IPessoa } from '@/interfaces/constants'

export const tipoPessoa: IPessoa[] = [
  {
    key: 'F',
    type: 'Pessoa Física'
  },
  {
    key: 'J',
    type: 'Pessoa Jurídica'
  }
]

export const rankingHeader: IRankingHeader[] = [
  { title: 'Posição', key: 'position', align: 'center' },
  { title: 'Instituição', key: 'inst_nome' },
  { title: 'Unidade', key: 'Unidade', align: 'center' },
  { title: 'Periodicidade', key: 'Periodicidade', align: 'center' },
  { title: 'Data de Vigência', key: 'DataVigencia', align: 'center' },
  { title: 'Valor máximo de Tarifas (R$)', key: 'ValorMaximo', align: 'center' }
]

export const tarifasServicosHeader: ITarifasServicosMaxHeader[] = [
  { title: 'Serviço', key: 'Servico' },
  { title: 'Unidade', key: 'Unidade', align: 'center' },
  { title: 'Periodicidade', key: 'Periodicidade', align: 'center' },
  { title: 'Data de Vigência', key: 'DataVigencia', align: 'center' },
  { title: 'Valor máximo de Tarifas (R$)', key: 'ValorMaximo', align: 'center' }
]
