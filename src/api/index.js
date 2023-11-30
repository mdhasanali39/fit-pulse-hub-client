import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'http://localhost:5000/api/v1'
})

export default axiosSecure;

export const axiosPublic = axios.create({
    baseURL:"http://localhost:5000/api/v1"
})