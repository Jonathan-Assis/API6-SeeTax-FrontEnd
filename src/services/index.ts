import axios from 'axios';
const url = 'https://api6-seetax-backend.onrender.com';
let method = axios.create({
    baseURL: url,
    timeout: 30000
});

export default class ServerConnection {
    static async getRanking() {
        return await method.get('/ranking');
    }

    static async getTax() {
        return await method.get('/tax');
    }
}