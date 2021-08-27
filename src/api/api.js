import axios from "axios";

const apiKey = 'c54c939b-8f64-4732-8882-0e1faf3bbe98';

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": apiKey
    }
});

export const usersAPI = {
    getUsers: (page, count) => {
        return axiosInstance.get(`users?page=${page}&count=${count}`)
            .then(response => response.data);
    },
    follow: (userId) => {
        return axiosInstance.post(`follow/${userId}`)
            .then(response => response.data);
    },
    unfollow: (userId) => {
        return axiosInstance.delete(`follow/${userId}`)
            .then(response => response.data);
    },
    getProfile: (userId) => {
        console.error('Old version. Use profileAPI.getProfile() instead.');
        return profileAPI.getProfile(userId);
    }
};

export const authAPI = {
    me: () => {
        return axiosInstance.get('auth/me')
            .then(response => response.data);
    },
    login: (email, password, rememberMe=false) => {
        const loginData = {email, password, rememberMe};
        return axiosInstance.post('/auth/login', loginData)
            .then(response => response.data);
    },
    logout: () => {
        return axiosInstance.delete('/auth/login')
            .then(response => response.data);
    }
};

export const profileAPI = {
    getProfile: (userId) => {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus: (userId) => {
        return axiosInstance.get(`profile/status/${userId}`)
            .then(response => response.data);
    },
    updateStatus: (status) => {
        return axiosInstance.put(`profile/status`, {status: status})
            .then(response => response.data);
    }
};

