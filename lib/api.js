import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1337/api', // Update with Strapi URL in production
});

export const fetchAPI = async (endpoint) => {
    try {
        const res = await api.get(`${endpoint}?populate=*`);
        return res.data.data;
    } catch (error) {
        console.error('Failed to fetch API:', error);
        return null;
    }
};

