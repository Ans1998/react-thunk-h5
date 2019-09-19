import axios from 'axios'
import {Toast} from 'antd-mobile';
import md5 from 'js-md5'
import qs from 'qs'

// qs数据转换   {name:'hehe',age:10} 转 'name=hehe&age=10'

let getBaseUrl = '';
if (process.env.NODE_ENV !== 'production') {
    // 开发者环境
    getBaseUrl = 'xxx';
} else {
    // 线上环境
    getBaseUrl = 'xxx';
}

const client = axios.create({
    baseURL: getBaseUrl,
    responseType: 'json',
    timeout: 3000
});

client.defaults.withCredentials = true;

// 添加请求拦截器
client.interceptors.request.use( (config) => {
    // 在发送请求之前做些什么
    return config;
},  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
client.interceptors.response.use( (response) => {
    // 对响应数据做点什么
    if (response.data.status === 'fail') {
        switch (response.data.code) {
            case '502':
            case '503':
                // 401 清除token信息并跳转到登录页面
                console.log('---清除token信息并跳转到登录页面---');
                break;
        }
    }
    return response;
},  (error) => {
    // 对响应错误做点什么
    Toast.fail('网络请求加载失败', 3);
    return Promise.reject(error);
});


const http = {
    // get请求
    get(url, data = {}) {
        return client.get(url, { params: data })
    },
    // post请求
    post(url, data = {}) {
        let _data = qs.stringify(data);
        return client.post(url, _data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
    }
};

export default http
