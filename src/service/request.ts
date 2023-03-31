import axios from 'axios'
import { baseURL, timeout } from './config'

// 创建请求对象

const request = axios.create({
    baseURL,
    timeout,
})

// 请求拦截器
request.interceptors.request.use(
    (config) => {
        return config
    },
    (err) => {
        Promise.reject(err)
    }
)

//响应拦截器
request.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        return Promise.reject(err)
    }
)

export { baseURL, request }
