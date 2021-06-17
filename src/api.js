import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        "Access-Control-Allow-Origin":"*"
    }
});

export default api;