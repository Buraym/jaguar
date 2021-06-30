import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/',
    headers:{"Access-Control-Allow-Origin":"*", "Cross-Origin-Opener-Policy":"same-origin", "Cross-Origin-Embedder-Policy":"require-corp"}
});

export default api;