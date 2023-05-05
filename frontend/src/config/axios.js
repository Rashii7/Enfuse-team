import axios from 'axios';

const serverUrl = "http://127.0.0.1:5000/api/v1"

export const apiInstance = axios.create({
    baseURL: serverUrl,
    withCredentials: true,
})
