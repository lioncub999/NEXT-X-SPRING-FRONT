import axios, {AxiosInstance} from "axios";

const instance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    timeout: 5000,
})

export default instance;