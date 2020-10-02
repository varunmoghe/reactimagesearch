import axios from 'axios';

// export default axios.create({
//     baseURL: 'https://api.unsplash.com',
//     headers: {
//         Authorization: 'Client-ID kSpRR3DHW3NPpFH4iJHbh_7Oqr7pDDPEynK8iL8Ud2o'
//     }
// });

class Unsplash {
    create() {
        return axios.create({
            baseURL: 'https://api.unsplash.com',
            headers: {
                Authorization: 'Client-ID kSpRR3DHW3NPpFH4iJHbh_7Oqr7pDDPEynK8iL8Ud2o'
            }
        });
    }

    getLatestPhotos () {
        const response = this.create().get('/photos', {
            params: {
                per_page: 30
            }
        });
        return response;
    }

    getSearchPhotos(term) {
        const response = this.create().get('/search/photos', {
            params: {
                query: term,
                per_page: 30
            }            
        });
        return response;
    }
}

export default Unsplash;