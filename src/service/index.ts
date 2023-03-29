import axios from 'axios';
const url = 'https://api6-seetax-backend.onrender.com';
let metodo = axios.create({
    baseURL: url,
    timeout: 30000
});

export default class ServerConnection {
    static async getRanking() {
        return await metodo.get('ranking');
    }

    static async getTaxa() {
        return await metodo.get('tax');
    }
}