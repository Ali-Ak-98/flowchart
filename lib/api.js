import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Update with Strapi URL in production
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

