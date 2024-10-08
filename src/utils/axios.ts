import axios from 'axios'

const axiosInstance = axios.create({ baseURL: 'https://localhost:5000/api' })

axiosInstance.interceptors.request.use(
)

axiosInstance.interceptors.response.use(
)

export default axiosInstance