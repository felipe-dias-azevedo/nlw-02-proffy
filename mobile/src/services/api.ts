import axios from 'axios';

const api = axios.create({
    baseURL: 'http://zp-fsk.anonymous.mobile.exp.direct:3333'
})

export default api;