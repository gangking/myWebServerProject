import axios from 'axios' 

const request = axios.create({
 // 配置基础路径
 baseURL: 'https://conduit.productionready.io/' 
}) 

// 请求拦截器

// 响应拦截器

export default request 
