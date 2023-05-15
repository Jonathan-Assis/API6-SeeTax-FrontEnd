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

export default class ServerConnection {
    static async getRanking() {
        return await method.get('/ranking');
    }

    static async getTax() {
        return await method.get('/tax');
    }

    static async getGrupos() {
        return await methodValoresDeServicoBancario.get('/GruposConsolidados?$top=100&$format=json');
    }

    static async getInstituicoes() {
        return await method.get('/instituicoes');
    }

    static async getServicos() {
        return await method.get('/servicos');
    }
}