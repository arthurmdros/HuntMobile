import axios from 'axios';

const api = axios.create({
    baseURL: 'http://IpDaSuaMáquina:3333'
});

export default api;
