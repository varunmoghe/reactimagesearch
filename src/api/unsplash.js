import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kSpRR3DHW3NPpFH4iJHbh_7Oqr7pDDPEynK8iL8Ud2o'
    }
});