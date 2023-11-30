import axios from "axios";

const axiosSecure = axios.create({
    baseURL:'https://fit-pulse-hub-server.vercel.app/api/v1'
})

export default axiosSecure;

export const axiosPublic = axios.create({
    baseURL:"https://fit-pulse-hub-server.vercel.app/api/v1"
})